import { Product } from './product.model'

export class ProductService {
    getProducts ( ) : Product[] {
        return [
            {reference : 'T5412789', designation : 'iPhone 7', description : 'SmartPhone de chez Apple'},
            {reference : 'E7521459', designation : 'Grand écran LG', description : 'Écran salon pour les televizjon addict de chez LG'},
            {reference : 'T5874526', designation : 'Alcatel', description : 'Téléphone cellulaire à l\'ancienne'},
            {reference : 'T8526971', designation : 'E7', description : 'SmartPhone de chez Samsung'} 
        ];
    }
}