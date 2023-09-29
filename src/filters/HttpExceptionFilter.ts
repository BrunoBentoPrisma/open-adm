
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const responseMessage : string | object = exception.getResponse();

    let message: string | unknown;

    if (typeof responseMessage === 'string') {
      message = responseMessage;
    } else if (typeof responseMessage === 'object' && 'message' in responseMessage) {
      message = responseMessage['message'];
    } else {
      message = 'Ocorreu um erro interno, tente novamente mais tarde!';
    }
    
    response.status(status).json({
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
