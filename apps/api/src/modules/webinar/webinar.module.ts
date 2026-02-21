import { Module } from '@nestjs/common';
import { WebinarController } from '@interfaces/http/controllers/webinar.controller';
import { RegisterWebinarHandler } from '@application/webinar/handlers/register-webinar.handler';
import { PrismaWebinarRepository } from '@infrastructure/persistence/repositories/prisma-webinar.repository';
import { PrismaLeadRepository } from '@infrastructure/persistence/repositories/prisma-lead.repository';
import { PrismaService } from '@infrastructure/persistence/prisma.service';
import { KitEmailService } from '@infrastructure/email/kit-email.service';
import { INJECTION_TOKENS } from '@shared/constants';

@Module({
  controllers: [WebinarController],
  providers: [
    PrismaService,
    RegisterWebinarHandler,
    {
      provide: INJECTION_TOKENS.WEBINAR_REPOSITORY,
      useClass: PrismaWebinarRepository,
    },
    {
      provide: INJECTION_TOKENS.LEAD_REPOSITORY,
      useClass: PrismaLeadRepository,
    },
    {
      provide: INJECTION_TOKENS.EMAIL_SERVICE,
      useClass: KitEmailService,
    },
  ],
})
export class WebinarModule {}
