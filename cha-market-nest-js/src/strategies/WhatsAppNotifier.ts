import { INotifier } from 'src/contract/INotifier';
import { NotificationEventDTO } from 'src/DTOs/NotificationEventDTO';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';

export class WhatsAppNotifier implements INotifier {
  channel: string = 'whatsapp';
  async Send(renderedDTO: RenderedContentDTO): Promise<void> {
    console.log('Sending WhatsApp message with subject:', renderedDTO.subject);
    console.log('WhatsApp message body:', renderedDTO.body);
    console.log('Message sent successfully via WhatsAppNotifier strategy.');
  }
}
