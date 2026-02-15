import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Lead } from '@domain/lead/entities/lead.entity';
import type { ILeadRepository } from '@domain/lead/repositories/lead.repository.interface';

@Injectable()
export class PrismaLeadRepository implements ILeadRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Lead | null> {
    const record = await this.prisma.lead.findUnique({
      where: { email },
    });

    if (!record) return null;
    return Lead.fromPersistence(record);
  }

  async save(lead: Lead): Promise<Lead> {
    const record = await this.prisma.lead.upsert({
      where: { email: lead.email.toString() },
      create: {
        email: lead.email.toString(),
        name: lead.name ?? null,
        company: lead.company ?? null,
        source: lead.source,
        pack: lead.pack ?? null,
      },
      update: {
        name: lead.name ?? undefined,
        company: lead.company ?? undefined,
        pack: lead.pack ?? undefined,
      },
    });

    return Lead.fromPersistence(record);
  }
}
