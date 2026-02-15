import { Module } from '@nestjs/common';
import { LeadController } from '@interfaces/http/controllers/lead.controller';
import { CreateLeadHandler } from '@application/lead/handlers/create-lead.handler';
import { PrismaLeadRepository } from '@infrastructure/persistence/repositories/prisma-lead.repository';
import { PrismaService } from '@infrastructure/persistence/prisma.service';
import { INJECTION_TOKENS } from '@shared/constants';

@Module({
  controllers: [LeadController],
  providers: [
    PrismaService,
    CreateLeadHandler,
    {
      provide: INJECTION_TOKENS.LEAD_REPOSITORY,
      useClass: PrismaLeadRepository,
    },
  ],
  exports: [INJECTION_TOKENS.LEAD_REPOSITORY, PrismaService],
})
export class LeadModule {}
