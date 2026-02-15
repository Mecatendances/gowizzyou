import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Response } from 'express';
import { DomainException } from '@shared/exceptions/domain.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Une erreur interne est survenue';
    let code = 'INTERNAL_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : (exceptionResponse as { message?: string }).message ?? exception.message;
      code = 'HTTP_ERROR';
    } else if (exception instanceof DomainException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      code = exception.code;
    }

    if (status >= 500) {
      this.logger.error(
        `[${code}] ${message}`,
        exception instanceof Error ? exception.stack : undefined,
      );
    }

    // Never leak stack traces in response (OWASP)
    response.status(status).json({
      statusCode: status,
      code,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
