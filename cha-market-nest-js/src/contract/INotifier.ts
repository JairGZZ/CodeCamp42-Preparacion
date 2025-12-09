//segun lo que investigue, el patron strategy
//  en nest js es mejor usando clases abstractas que

import { CustomerDTO } from 'src/DTOs/CustomerDTO';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';

// usando interfaces pero igual le ponder la I en el nombre jajaja
export abstract class INotifier {
  abstract channel: string;
  abstract Send(renderedDTO: RenderedContentDTO,CustomerDTO:CustomerDTO): Promise<void>;
}
