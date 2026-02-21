import { Module } from '@nestjs/common';
import { ContactController } from '@interfaces/http/controllers/contact.controller';
import { SendMessageHandler } from '@application/contact/handlers/send-message.handler';
import { PrismaContactRepository } from '@infrastructure/persistence/repositories/prisma-contact.repository';
import { PrismaLeadRepository } from '@infrastructure/persistence/repositories/prisma-lead.repository';
import { PrismaService } from '@infrastructure/persistence/prisma.service';
import { KitEmailService } from '@infrastructure/email/kit-email.service';
import { INJECTION_TOKENS } from '@shared/constants';

@Module({
  controllers: [ContactController],
  providers: [
    PrismaService,
    SendMessageHandler,
    {
      provide: INJECTION_TOKENS.CONTACT_REPOSITORY,
      useClass: PrismaContactRepository,
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
export class ContactModule {}
