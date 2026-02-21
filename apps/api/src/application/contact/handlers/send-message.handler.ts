import { Inject, Injectable, Logger } from '@nestjs/common';
import { Email } from '@domain/lead/value-objects/email.vo';
import { ContactMessage } from '@domain/contact/entities/contact-message.entity';
import type { IContactRepository } from '@domain/contact/repositories/contact.repository.interface';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';
import type { IEmailService } from '@domain/email/email-service.interface';
import { Lead } from '@domain/lead/entities/lead.entity';
import { INJECTION_TOKENS } from '@shared/constants';
import type { SendMessageCommand } from '../commands/send-message.command';

@Injectable()
export class SendMessageHandler {
  private readonly logger = new Logger(SendMessageHandler.name);

  constructor(
    @Inject(INJECTION_TOKENS.CONTACT_REPOSITORY)
    private readonly contactRepository: IContactRepository,
    @Inject(INJECTION_TOKENS.LEAD_REPOSITORY)
    private readonly leadRepository: ILeadRepository,
    @Inject(INJECTION_TOKENS.EMAIL_SERVICE)
    private readonly emailService: IEmailService,
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

    const saved = await this.contactRepository.save(message);

    // Subscribe to Kit contact form (fire and forget)
    const kitFormId = process.env.KIT_CONTACT_FORM_ID;
    if (kitFormId) {
      this.emailService
        .subscribeToForm({
          email: email.toString(),
          name: command.name,
          formId: kitFormId,
          tags: ['contact', command.pack || 'general'],
        })
        .catch((err) => this.logger.error('Kit subscription failed', err));
    }

    return saved;
  }
}
