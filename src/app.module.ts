import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
  Scope,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMiddleware } from './app.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      scope: Scope.TRANSIENT,
      useFactory: () => new AppService(),
    },
  ],
})
export class AppModule implements NestModule {
  public async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
