import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './modules/NotificationModule';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NotificationModule],
  providers: [AppService],
})
export class AppModule {}
