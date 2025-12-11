// este dto representa la informacion del usuario

import { ApiProperty } from '@nestjs/swagger';

export class CustomerDTO {
  @ApiProperty()
  public customerId?: string;
  @ApiProperty()
  public email?: string;
  @ApiProperty()
  public phoneNumber?: string;
  @ApiProperty()
  public DeviceToken?: string;
}
