import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WebinarRegistration } from '@domain/webinar/entities/webinar-registration.entity';
import { Email } from '@domain/lead/value-objects/email.vo';
import type { IWebinarRepository } from '@domain/webinar/repositories/webinar.repository.interface';
import type { WebinarStatus } from '@shared/constants';

@Injectable()
export class PrismaWebinarRepository implements IWebinarRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmailAndWebinarId(
    email: string,
    webinarId: string,
  ): Promise<WebinarRegistration | null> {
    const record = await this.prisma.webinarRegistration.findUnique({
      where: { email_webinarId: { email, webinarId } },
    });

    if (!record) return null;

    return WebinarRegistration.create({
      id: record.id,
      name: record.name,
      email: Email.create(record.email),
      webinarId: record.webinarId,
      status: record.status as WebinarStatus,
      leadId: record.leadId ?? undefined,
      createdAt: record.createdAt,
    });
  }

  async save(registration: WebinarRegistration): Promise<WebinarRegistration> {
    const record = await this.prisma.webinarRegistration.create({
      data: {
        leadId: registration.leadId ?? null,
        name: registration.name,
        email: registration.email.toString(),
        webinarId: registration.webinarId,
        status: registration.status,
      },
    });

    return WebinarRegistration.create({
      id: record.id,
      name: record.name,
      email: Email.create(record.email),
      webinarId: record.webinarId,
      status: record.status as WebinarStatus,
      leadId: record.leadId ?? undefined,
      createdAt: record.createdAt,
    });
  }
}
