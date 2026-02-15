import { Inject, Injectable } from '@nestjs/common';
import { Email } from '@domain/lead/value-objects/email.vo';
import { Lead } from '@domain/lead/entities/lead.entity';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';
import { INJECTION_TOKENS } from '@shared/constants';
import type { CreateLeadCommand } from '../commands/create-lead.command';

@Injectable()
export class CreateLeadHandler {
  constructor(
    @Inject(INJECTION_TOKENS.LEAD_REPOSITORY)
    private readonly leadRepository: ILeadRepository,
  ) {}

  async execute(command: CreateLeadCommand): Promise<Lead> {
    const email = Email.create(command.email);

    const existing = await this.leadRepository.findByEmail(email.toString());
    if (existing) {
      return existing;
    }

    const lead = Lead.create({
      email,
      name: command.name,
      company: command.company,
      source: command.source,
      pack: command.pack,
    });

    return this.leadRepository.save(lead);
  }
}
