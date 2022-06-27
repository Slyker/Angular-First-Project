import { Component } from '@angular/core';

import { Product, CartProduct } from '../products';
import { ShopService } from '../shop.service';
import { CartService } from '../cart.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  
  products:Product[] = [] ;
  constructor(private shopService:ShopService,private cartService:CartService,private _snackBar: MatSnackBar)
  {

    
  }
  ngOnInit():void{
    this.shopService.getProducts().subscribe((arg:Product[]) =>
    {
      this.products = arg
    });
  }
  openSnackBar(message: string, action: string, params:object) {
    this._snackBar.open(message, action,params);
  }
  onAddToCart(product: Product) {
    this.cartService.addToCart(product as CartProduct);
    this.openSnackBar(`${product.name} added to cart`, "Dismiss",{
      duration: 2000
    })
  }
  onShared(id:number) {
    let product = this.products.find(x=>x.id === id)
    this.openSnackBar(`You shared product : ${product?.name}`, "Dismiss",{
      duration: 2000
    })
  }
  onNotify(id:number) {
    let product = this.products.find(x=>x.id === id)
    this.openSnackBar(`You will be notified when ${product?.name} goes on sale`, "Dismiss",{
      duration: 2000
    })
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
