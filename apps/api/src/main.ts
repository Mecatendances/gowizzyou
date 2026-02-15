import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const logger = new Logger('Bootstrap');

  // === OWASP Security Headers ===
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
          fontSrc: ["'self'"],
          objectSrc: ["'none'"],
          frameSrc: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'"],
        },
      },
      crossOriginEmbedderPolicy: false,
      hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    }),
  );

  // === CORS ===
  app.enableCors({
    origin: process.env.API_CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400,
  });

  // === Input Validation (OWASP injection prevention) ===
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // Strip unknown properties
      forbidNonWhitelisted: true, // Reject unknown properties
      transform: true,
      transformOptions: { enableImplicitConversion: false },
      disableErrorMessages: process.env.NODE_ENV === 'production',
    }),
  );

  const port = parseInt(process.env.API_PORT ?? '3001', 10);
  const host = process.env.API_HOST ?? '0.0.0.0';

  await app.listen(port, host);
  logger.log(`API running on http://${host}:${port}`);
}

bootstrap();
