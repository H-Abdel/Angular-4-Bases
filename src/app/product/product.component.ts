import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  @Output() 
  deleteTriggered: EventEmitter<Product> = new EventEmitter<Product>();

  deleteProduct ( ) {
    this.deleteTriggered.emit(this.product)
  }

}
