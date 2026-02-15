import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { CreateLeadHandler } from '@application/lead/handlers/create-lead.handler';
import { CreateLeadCommand } from '@application/lead/commands/create-lead.command';
import { CreateLeadDto } from '../dto/create-lead.dto';
import type { LeadSource, PackType } from '@shared/constants';

@Controller('api/leads')
export class LeadController {
  constructor(private readonly createLeadHandler: CreateLeadHandler) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  async createLead(@Body() dto: CreateLeadDto) {
    const command = new CreateLeadCommand(
      dto.email.trim().toLowerCase(),
      (dto.source as LeadSource) ?? 'website',
      dto.name,
      dto.company,
      dto.pack as PackType | undefined,
    );

    await this.createLeadHandler.execute(command);

    return { success: true };
  }
}
