import { INotifier } from 'src/contract/INotifier';
import { CustomerDTO } from 'src/DTOs/CustomerDTO';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';


export class PushNotifier extends INotifier {
    channel: string = 'push';
    Send(renderedDTO: RenderedContentDTO, CustomerDTO: CustomerDTO): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
  
  
}
