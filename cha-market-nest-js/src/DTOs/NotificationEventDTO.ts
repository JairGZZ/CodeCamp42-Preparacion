import { v4 as uuidv4 } from 'uuid';
import { CustomerDTO } from './CustomerDTO';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationEventDTO {
  @ApiProperty()
  public eventId: string = uuidv4();
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
    this.templateKey = templateKey;
    this.channels = channels;
    this.customerDTO = customerDTO;
    this.data = data;
  }
}
