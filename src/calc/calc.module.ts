import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
import { LoggerMiddleware } from '../logger.middleware';

@Module({
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('calc');
  }
}
