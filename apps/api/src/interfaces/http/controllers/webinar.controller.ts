import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { RegisterWebinarHandler } from '@application/webinar/handlers/register-webinar.handler';
import { RegisterWebinarCommand } from '@application/webinar/commands/register-webinar.command';
import { RegisterWebinarDto } from '../dto/register-webinar.dto';
import { sanitize } from '../../../infrastructure/security/sanitizer';

@Controller('api/webinar')
export class WebinarController {
  constructor(private readonly registerHandler: RegisterWebinarHandler) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { ttl: 60000, limit: 5 } })
  async register(@Body() dto: RegisterWebinarDto) {
    const command = new RegisterWebinarCommand(
      sanitize(dto.name),
      dto.email.trim().toLowerCase(),
      dto.webinarId,
    );

    await this.registerHandler.execute(command);

    return { success: true, message: 'Inscription confirmee' };
  }
}
