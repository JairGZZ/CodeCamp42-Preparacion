import { HttpException, Inject, Injectable } from '@nestjs/common';
import { NotificationEventDTO } from 'src/DTOs/NotificationEventDTO';
import { TemplateService } from './TemplateService';
import { NotificationRepository } from 'src/Repository/NotificationRepository';
import { PersistNotificationDTO } from 'src/DTOs/PersistNotificationDTO';
import { INotifier } from 'src/contract/INotifier';
import { NOTIFICATION_STRATEGIES } from 'src/tokens/notification.token';
@Injectable()
export class NotficationEngine {
  constructor(
    private readonly templateService: TemplateService,
    private readonly notificationRepository: NotificationRepository,
    @Inject(NOTIFICATION_STRATEGIES)
    private readonly strategies: INotifier[],
  ) {}

  public async ProcessEvent(event: NotificationEventDTO): Promise<boolean> {
    for (const channel of event.channels) {
      const strategy = this.strategies.find((s) => s.channel === channel);
      if (!strategy) {
        throw new HttpException(`No strategy found for channel: ${channel}`, 500);
      }
      const renderedDTO = this.templateService.ProcessNotificationData(
        event.templateKey,
        event.data,
        channel,
        event.eventId,
      );

      const persistDTO = this.CreatePersistNotificationDTO(
        event.eventId,
        channel,
      );

      const result = await this.notificationRepository.create(persistDTO);

      const sendResult = await strategy.Send(renderedDTO, event.customerDTO);

      await this.UpdateNotificationStatus(sendResult, result.id);
    }

    return true;
  }

  private async UpdateNotificationStatus(sendResult: boolean, id: string) {
    if (sendResult) {
      await this.notificationRepository.updateNotification(id, {
        Status: 'Sent',
      });
    } else {
      await this.notificationRepository.updateNotification(id, {
        Status: 'Failed',
      });
    }
  }

  private CreatePersistNotificationDTO(
    eventId: string,
    channel: string,
  ): PersistNotificationDTO {
    const persistDTO = new PersistNotificationDTO(eventId, channel);
    return persistDTO;
  }
}
