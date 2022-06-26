import { Component } from '@angular/core';

import { products, Product, CartProduct } from '../products';
import { CartService } from '../cart.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  constructor(private cartService:CartService,private _snackBar: MatSnackBar){}
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
    let product = products.find(x=>x.id === id)
    this.openSnackBar(`You shared product : ${product?.name}`, "Dismiss",{
      duration: 2000
    })
  }
  onNotify(id:number) {
    let product = products.find(x=>x.id === id)
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
