import { Component, Input } from '@angular/core';
import { Product } from '../../../model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;

  get primaryImageSrc() {
    const hasMedia = this.product && this.product.media && this.product.media.length > 0;
    return hasMedia ? this.product.media[0].url : null;
  }
}
