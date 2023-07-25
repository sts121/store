import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() product: Product;
  @Output() viewItemDetails = new EventEmitter<Product>();

  viewDeatils() {
    this.viewItemDetails.emit(this.product);
  }
}
