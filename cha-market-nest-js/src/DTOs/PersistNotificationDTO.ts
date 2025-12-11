import { Version4Options, v4 } from 'uuid';

export class PersistNotificationDTO {
  public 'Notification Id': string = v4() ;
  public 'Event Id': string;
  public 'Channel': string;
  public 'Status': string = 'Pending';
  public 'Attempts': number = 0;
  public 'Created At': string = this.toAirtableDate(new Date());

  private toAirtableDate(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  constructor(
    eventId?: string,
    channel?: string
  ) {
    if (eventId) this['Event Id'] = eventId;
    if (channel) this['Channel'] = channel;
  }
}
