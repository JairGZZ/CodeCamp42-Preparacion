import { v4 as uuidv4 } from 'uuid';
import { CustomerDTO } from "./CustomerDTO";


export class NotificationEventDTO
{
    public eventId: string = uuidv4();
    public templateKey:string;
    public channels:Array<string>;
    public customerDTO:CustomerDTO;
    public data:Map<string,string>;
}

