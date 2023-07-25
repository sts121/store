import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent {
  @Input() product: Product;
  @Output() closeModalClicked = new EventEmitter();

  closeModal(){
    this.closeModalClicked.emit();
  }
}
