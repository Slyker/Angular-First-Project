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
  columnsToDisplayWithExpand:string[] = [...this.columnsToDisplay];
 
  expandedElement: CartProduct | null = null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.columnsToDisplayWithExpand.push("expand")
    }
  }
  deleteProduct(id:number){
    this.items = this.cartService.deleteItemById(id) 
  }
  productQuantity(id:number,quantity:number,action:string){
    let prod = this.cartService.getItem(id)
    if(!prod)return;
    switch(action)
    {
      case "add":        
        prod.quantity += quantity;
        if(prod.quantity > prod.stock) {
          prod.quantity = prod.stock
        }
        break;
      case "del":
        prod.quantity -= quantity;
        if(prod.quantity < 0) {
          prod.quantity = 0
        }
        break;
      default:
        break;
    }
    
    this.cartService.getProductTotals(prod);
    this.total = this.cartService.getTotal()
  }
  getTotalCost() {
    return this.items.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
