import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { SendMessageHandler } from '@application/contact/handlers/send-message.handler';
import { SendMessageCommand } from '@application/contact/commands/send-message.command';
import { SendMessageDto } from '../dto/send-message.dto';
import { sanitize } from '../../../infrastructure/security/sanitizer';
import type { PackType } from '@shared/constants';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly sendMessageHandler: SendMessageHandler) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { ttl: 60000, limit: 5 } })
  async sendMessage(@Body() dto: SendMessageDto) {
    const command = new SendMessageCommand(
      sanitize(dto.name),
      dto.email.trim().toLowerCase(),
      sanitize(dto.message),
      dto.company ? sanitize(dto.company) : undefined,
      dto.pack as PackType | undefined,
    );

    await this.sendMessageHandler.execute(command);

    return { success: true, message: 'Message envoye avec succes' };
  }
}
