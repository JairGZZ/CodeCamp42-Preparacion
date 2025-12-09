//segun lo que investigue, el patron strategy
//  en nest js es mejor usando clases abstractas que
// usando interfaces pero igual le ponder la I en el nombre jajaja


import { CustomerDTO } from 'src/DTOs/CustomerDTO';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';

export abstract class INotifier {
  abstract channel: string;
  abstract Send(
    renderedDTO: RenderedContentDTO,
    CustomerDTO: CustomerDTO,
  ): Promise<boolean>;
}
