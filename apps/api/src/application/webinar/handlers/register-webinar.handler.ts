import { Inject, Injectable, Logger } from '@nestjs/common';
import { Email } from '@domain/lead/value-objects/email.vo';
import { WebinarRegistration } from '@domain/webinar/entities/webinar-registration.entity';
import type { IWebinarRepository } from '@domain/webinar/repositories/webinar.repository.interface';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';
import type { IEmailService } from '@domain/email/email-service.interface';
import { Lead } from '@domain/lead/entities/lead.entity';
import { DuplicateRegistrationException } from '@shared/exceptions/domain.exception';
import { INJECTION_TOKENS } from '@shared/constants';
import type { RegisterWebinarCommand } from '../commands/register-webinar.command';

@Injectable()
export class RegisterWebinarHandler {
  private readonly logger = new Logger(RegisterWebinarHandler.name);

  constructor(
    @Inject(INJECTION_TOKENS.WEBINAR_REPOSITORY)
    private readonly webinarRepository: IWebinarRepository,
    @Inject(INJECTION_TOKENS.LEAD_REPOSITORY)
    private readonly leadRepository: ILeadRepository,
    @Inject(INJECTION_TOKENS.EMAIL_SERVICE)
    private readonly emailService: IEmailService,
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

    const saved = await this.webinarRepository.save(registration);

    // Subscribe to Kit webinar form (fire and forget)
    const kitFormId = process.env.KIT_WEBINAR_FORM_ID;
    if (kitFormId) {
      this.emailService
        .subscribeToForm({
          email: email.toString(),
          name: command.name,
          formId: kitFormId,
          tags: ['webinar'],
        })
        .catch((err) => this.logger.error('Kit subscription failed', err));
    }

    return saved;
  }
}
