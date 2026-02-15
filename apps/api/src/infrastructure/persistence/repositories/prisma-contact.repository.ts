import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ContactMessage } from '@domain/contact/entities/contact-message.entity';
import { Email } from '@domain/lead/value-objects/email.vo';
import type { IContactRepository } from '@domain/contact/repositories/contact.repository.interface';
import type { ContactStatus, PackType } from '@shared/constants';

@Injectable()
export class PrismaContactRepository implements IContactRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(message: ContactMessage): Promise<ContactMessage> {
    const record = await this.prisma.contactMessage.create({
      data: {
        leadId: message.leadId ?? null,
        name: message.name,
        email: message.email.toString(),
        company: message.company ?? null,
        pack: message.pack ?? null,
        message: message.message,
        status: message.status,
      },
    });

    return ContactMessage.create({
      id: record.id,
      name: record.name,
      email: Email.create(record.email),
      company: record.company ?? undefined,
      pack: (record.pack as PackType) ?? undefined,
      message: record.message,
      status: record.status as ContactStatus,
      leadId: record.leadId ?? undefined,
      createdAt: record.createdAt,
    });
  }
}
