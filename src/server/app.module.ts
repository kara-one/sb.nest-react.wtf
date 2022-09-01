import { Module } from '@nestjs/common';
import { AdminController } from './Admin/admin.controller';
import { AppController } from './App/app.controller';
import { AppService } from './App/app.service';

@Module({
  controllers: [AdminController, AppController],
  providers: [AppService],
})
export class AppModule {}
