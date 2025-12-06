import { Version4Options,v4 } from "uuid";

export class PersistNotificationDTO{
    public notificationId: string;
    public eventId:string;
    public channel:string;
    public status:string;
    public attempts:number;
    public createdAt: Date;
}
