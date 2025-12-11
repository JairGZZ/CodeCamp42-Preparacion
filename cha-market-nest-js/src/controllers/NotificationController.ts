import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { get } from 'http';
import { NotificationEventDTO } from 'src/DTOs/NotificationEventDTO';
import { NotificationRepository } from 'src/Repository/NotificationRepository';
import { NotficationEngine } from 'src/services/NotificationEngine';

@Controller('/notifications')
export class NotificationController {
  constructor(
    private readonly notificationEngine: NotficationEngine,
    private readonly notificationRepostiory: NotificationRepository,
  ) {}
  @Post()
  async ProcessNotification(
    @Body() notificationEventDTO: NotificationEventDTO,
  ): Promise<string> {
    await this.notificationEngine.ProcessEvent(notificationEventDTO);
    return 'Notification processed';
  }
  @Get()
  async getAllNotifications() {
    return this.notificationRepostiory.getAllNotifications();
  }
  @Get('/test-error')
  async testError() {
    throw new HttpException("an unexpected error ocurred",500);
  }
  @Get('/byid')
  async getNotificationById() {
    return this.notificationRepostiory.getNotificationById('recpsmkZp3JwqS5Ev');
  }
}
