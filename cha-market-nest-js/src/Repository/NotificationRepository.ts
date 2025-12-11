import { Injectable } from '@nestjs/common';
import Airtable from 'airtable';
import { PersistNotificationDTO } from 'src/DTOs/PersistNotificationDTO';

@Injectable()
export class NotificationRepository {
  private base: Airtable.Base;
  private readonly tableName: string = 'Notifications';
  constructor() {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;

    if (!apiKey || !baseId) {
      throw new Error('No se encontro la apikey o el base id');
    }

    Airtable.configure({
      apiKey,
    });
    this.base = Airtable.base(baseId);
  }

  public async create(fields: PersistNotificationDTO) {
    const plain = { ...fields };
    try {
      const record = await this.base(this.tableName).create(plain);
      return record;
    } catch (error) {
      console.error('Error creating notification record:', error);
      throw error;
    }
  }

  public async updateNotification(recordId: string, payload: any) {
    const [updated] = await this.base('Notifications').update([
      {
        id: recordId,
        fields: payload,
      },
    ]);
  }

  public async getAllNotifications() {
    try {
      await this.base(this.tableName)
        .select({
          maxRecords: 50,
          view: 'Grid view',
        })
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            console.log(record._rawJson.createdTime);
          });

          fetchNextPage();
        });
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  }

  public async getNotificationById(id: string) {
    this.base('Notifications').find('recpsmkZp3JwqS5Ev', (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Retrieved', record!.id, record!.fields);
    });
  }
}
