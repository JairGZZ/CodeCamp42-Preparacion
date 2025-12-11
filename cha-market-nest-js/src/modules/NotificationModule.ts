import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { INotifier } from 'src/contract/INotifier';
import { NotificationController } from 'src/controllers/NotificationController';
import { NotificationRepository } from 'src/Repository/NotificationRepository';
import { NotficationEngine } from 'src/services/NotificationEngine';
import { TemplateService } from 'src/services/TemplateService';
import { EmailNotifier } from 'src/strategies/EmailNotifier';
import { WhatsAppNotifier } from 'src/strategies/WhatsAppNotifier';
import { NOTIFICATION_STRATEGIES } from 'src/tokens/notification.token';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [
    TemplateService,
    NotificationRepository,
    EmailNotifier,
    WhatsAppNotifier,
    {
      provide: NOTIFICATION_STRATEGIES,
      useFactory: (...strategies: INotifier[]) => strategies,
      inject: [EmailNotifier, WhatsAppNotifier],
    },
    NotficationEngine,
  ],
  exports: [NotficationEngine],
  controllers: [NotificationController],
})
export class NotificationModule {}
