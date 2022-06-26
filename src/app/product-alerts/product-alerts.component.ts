import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, CartProduct} from '../products';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() shared = new EventEmitter();
  @Output() priceAlert = new EventEmitter();
  @Output() addToCart = new EventEmitter();


  constructor(private cartService: CartService) {}


  ngOnInit() {}
}
