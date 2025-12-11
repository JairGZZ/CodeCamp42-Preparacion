import { v4 } from 'uuid';
import { CustomerDTO } from './CustomerDTO';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class NotificationEventDTO {
  @ApiProperty()
  public eventId: string = v4();
  @ApiProperty()
  public templateKey: string;
  @ApiProperty()
  public channels: Array<string>;
  @ApiProperty()
  public customerDTO: CustomerDTO;
  @ApiProperty()
  public data: Record<string, string>;

  constructor(
    templateKey: string,
    channels: Array<string>,
    customerDTO: CustomerDTO,
    data: Record<string, string>,
  ) {
    this.eventId = v4();
    this.templateKey = templateKey;
    this.channels = channels;
    this.customerDTO = customerDTO;
    this.data = data;
  }
}
