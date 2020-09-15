import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { AppService } from './app.service';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  public constructor(private readonly appService: AppService) {
    console.log('=======================');
    console.log('APP MIDDLEWARE:', this.appService);
    console.log('=======================');
  }

  public async use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
