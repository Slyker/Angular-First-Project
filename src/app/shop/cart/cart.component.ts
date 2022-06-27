import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CartProduct } from 'src/app/products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CartComponent {
  items = this.cartService.getItems();
  total = this.cartService.getTotal();
  columnsToDisplay = ['name','price','quantity', 'total'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: CartProduct | null = null;

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
