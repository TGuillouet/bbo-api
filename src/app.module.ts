import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import {AuthMiddleware} from './middlewares/auth-middleware.service';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('projects');
  }
}
