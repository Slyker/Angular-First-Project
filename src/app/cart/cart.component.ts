import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  total = this.cartService.total;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  deleteProduct(id:number){
    this.items = this.cartService.deleteItemById(id) 
  }
  productQuantity(id:number,quantity:number){
    let prod = this.cartService.getItem(id)
    if(!prod)return;
    prod.quantity = quantity;
    this.total = this.cartService.getTotal()
  }
}
