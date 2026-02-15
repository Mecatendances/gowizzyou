import { Inject, Injectable } from '@nestjs/common';
import { Email } from '@domain/lead/value-objects/email.vo';
import { WebinarRegistration } from '@domain/webinar/entities/webinar-registration.entity';
import type { IWebinarRepository } from '@domain/webinar/repositories/webinar.repository.interface';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';
import { Lead } from '@domain/lead/entities/lead.entity';
import { DuplicateRegistrationException } from '@shared/exceptions/domain.exception';
import { INJECTION_TOKENS } from '@shared/constants';
import type { RegisterWebinarCommand } from '../commands/register-webinar.command';

@Injectable()
export class RegisterWebinarHandler {
  constructor(
    @Inject(INJECTION_TOKENS.WEBINAR_REPOSITORY)
    private readonly webinarRepository: IWebinarRepository,
    @Inject(INJECTION_TOKENS.LEAD_REPOSITORY)
    private readonly leadRepository: ILeadRepository,
  ) {}

  async execute(command: RegisterWebinarCommand): Promise<WebinarRegistration> {
    const email = Email.create(command.email);
    const webinarId = command.webinarId ?? 'claude-code-2026';

    // Check duplicate
    const existing = await this.webinarRepository.findByEmailAndWebinarId(
      email.toString(),
      webinarId,
    );
    if (existing) {
      throw new DuplicateRegistrationException(email.toString());
    }

    // Upsert lead
    let lead = await this.leadRepository.findByEmail(email.toString());
    if (!lead) {
      lead = await this.leadRepository.save(
        Lead.create({
          email,
          name: command.name,
          source: 'webinar',
        }),
      );
    }

    const registration = WebinarRegistration.create({
      name: command.name,
      email,
      webinarId,
      leadId: lead.id,
    });

    return this.webinarRepository.save(registration);
  }
}
