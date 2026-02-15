import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { LeadModule } from './modules/lead/lead.module';
import { ContactModule } from './modules/contact/contact.module';
import { WebinarModule } from './modules/webinar/webinar.module';
import { GlobalExceptionFilter } from '@interfaces/http/filters/http-exception.filter';

@Module({
  imports: [
    // Environment config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),

    // Rate limiting (OWASP brute-force protection)
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10) * 1000,
        limit: parseInt(process.env.THROTTLE_LIMIT ?? '10', 10),
      },
    ]),

    // Feature modules
    LeadModule,
    ContactModule,
    WebinarModule,
  ],
  providers: [
    // Global rate limiter guard
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    // Global exception filter (no stack trace leaks)
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
