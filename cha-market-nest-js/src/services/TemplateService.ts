import { Injectable } from '@nestjs/common';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';

Injectable();
export class TemplateService {
  public ProcessNotificationData(
    templateKey: string,
    data: Record<string, string>,
    channel: string,
    eventId: string,
  ): RenderedContentDTO {
    const message = this.MessageAccordingTK(templateKey, data);

    let dto = new RenderedContentDTO();
    dto.body = message;
    dto.channel = channel;
    dto.eventid = eventId;
    dto.subject = data['subject'];
    return dto;
  }
  private MessageAccordingTK(
    templateKey: string,
    data: Record<string, string>,
  ): string {
    if (templateKey === 'descuento') {
      return this.DiscountTemplate(templateKey, data);
    }
    return 'No template found';
  }

  private DiscountTemplate(
    templateKey: string,
    data: Record<string, string>,
  ): string {
    let message: string = '';
    if (templateKey === 'descuento') {

      message = `      
      Hola ${data['name']} , accediste a un descuento 
             del ${data['descuento']} 
             en productos de ${data['categoria']}
             Oferta valida hasta el ${data['fecha']}`;
    }
    return message;
  }
}
