import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationEventDTO } from 'src/DTOs/NotificationEventDTO';
import { NotificationRepository } from 'src/Repository/NotificationRepository';
import { NotficationEngine } from 'src/services/NotificationEngine';

@Controller('/notifications')
export class NotificationController {
  constructor(private readonly notificationEngine: NotficationEngine,private readonly notificationRepostiory:NotificationRepository) {}
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
  @Get('/byid')
  async getNotificationById() {
    return this.notificationRepostiory.getNotificationById('recpsmkZp3JwqS5Ev');
  }
  
}