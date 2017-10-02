import { Component } from '@angular/core'
import { Product } from './product/product.model'
import { ProductService } from './product/product.service'

@Component({
  selector    : 'app-root',
  providers   : [ProductService],
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})
export class AppComponent {

  newProduct = new Product()

  productList: Product[]

  constructor (private productService: ProductService) {
    this.productList = this.productService.getProducts()
  }

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
