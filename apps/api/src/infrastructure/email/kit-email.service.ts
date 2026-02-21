import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {
  IEmailService,
  SubscribeToFormParams,
} from '@domain/email/email-service.interface';

@Injectable()
export class KitEmailService implements IEmailService {
  private readonly logger = new Logger(KitEmailService.name);
  private readonly apiKey: string | undefined;
  private readonly baseUrl = 'https://api.convertkit.com/v3';

  constructor(private readonly config: ConfigService) {
    this.apiKey = this.config.get<string>('KIT_API_KEY');
  }

  async subscribeToForm(params: SubscribeToFormParams): Promise<void> {
    if (!this.apiKey) {
      this.logger.warn('KIT_API_KEY not configured — skipping email subscription');
      return;
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/forms/${params.formId}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: this.apiKey,
            email: params.email,
            first_name: params.name,
            tags: params.tags,
          }),
        },
      );

      if (!response.ok) {
        const body = await response.text();
        this.logger.error(`Kit API error (${response.status}): ${body}`);
        return;
      }

      this.logger.log(`Subscribed ${params.email} to form ${params.formId}`);
    } catch (error) {
      this.logger.error(`Kit API request failed: ${error}`);
    }
  }
}
