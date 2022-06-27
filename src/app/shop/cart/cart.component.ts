import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ["name","price","quantity"];
  items = this.cartService.getItems();
  total = this.cartService.getTotal();
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
    this.cartService.getProductTotals(prod);
    this.total = this.cartService.getTotal()
  }
  getTotalCost() {
    return this.items.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
