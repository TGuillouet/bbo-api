import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ProjectsController } from './projects/projects.controller';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController],
  providers: [AppService],
})
export class AppModule {}
