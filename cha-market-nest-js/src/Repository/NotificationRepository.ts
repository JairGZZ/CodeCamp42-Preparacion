import { Injectable } from '@nestjs/common';
import Airtable, { apiKey } from 'airtable';
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

  async create(fields: PersistNotificationDTO) {

    const plain = { ...fields};
    try {
      const record = await this.base(this.tableName).create(plain);
      return record;
    } catch (error) {
      console.error('Error creating notification record:', error);
      throw error;
    }
  }
}
