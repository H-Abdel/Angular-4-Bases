import { Component } from '@angular/core';
import { Product } from './product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newProduct = new Product()

  productList: Product[] = [
    {reference : 'T5412789', designation : 'iPhone 7', description : 'SmartPhone de chez Apple'},
    {reference : 'E7521459', designation : 'Grand écran LG', description : 'Écran salon pour les televizjon addict de chez LG'},
    {reference : 'T5874526', designation : 'Alcatel', description : 'Téléphone cellulaire à l\'ancienne'},
    {reference : 'T8526971', designation : 'E7', description : 'SmartPhone de chez Samsung'} 
  ]

  addProduct() { 
    if (this.newProduct.reference || this.newProduct.designation || this.newProduct.description) { 
      this.productList.push(this.newProduct)
      this.newProduct = new Product()
    }
  }

  deleteProduct(product: Product) { 
    let index = this.productList.findIndex(p => { 
      return p == product
    })
 
    if (index != -1) { 
      // Supprime le produit situé à l’index donné 
      this.productList.splice(index, 1); 
 
    }
  }

}
