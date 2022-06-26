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

  constructor(private cartService: CartService,private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product as CartProduct);
    this.openSnackBar(`${product.name} added to cart`, "Dismiss")
  }
  ngOnInit() {}
}
