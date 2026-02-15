import { Inject, Injectable } from '@nestjs/common';
import { Email } from '@domain/lead/value-objects/email.vo';
import { ContactMessage } from '@domain/contact/entities/contact-message.entity';
import type { IContactRepository } from '@domain/contact/repositories/contact.repository.interface';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';
import { Lead } from '@domain/lead/entities/lead.entity';
import { INJECTION_TOKENS } from '@shared/constants';
import type { SendMessageCommand } from '../commands/send-message.command';

@Injectable()
export class SendMessageHandler {
  constructor(
    @Inject(INJECTION_TOKENS.CONTACT_REPOSITORY)
    private readonly contactRepository: IContactRepository,
    @Inject(INJECTION_TOKENS.LEAD_REPOSITORY)
    private readonly leadRepository: ILeadRepository,
  ) {}

  async execute(command: SendMessageCommand): Promise<ContactMessage> {
    const email = Email.create(command.email);

    // Upsert lead
    let lead = await this.leadRepository.findByEmail(email.toString());
    if (!lead) {
      lead = await this.leadRepository.save(
        Lead.create({
          email,
          name: command.name,
          company: command.company,
          source: 'contact',
          pack: command.pack,
        }),
      );
    }

    const message = ContactMessage.create({
      name: command.name,
      email,
      company: command.company,
      pack: command.pack,
      message: command.message,
      leadId: lead.id,
    });

    return this.contactRepository.save(message);
  }
}
