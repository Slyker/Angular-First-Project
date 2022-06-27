export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  lowStock?: number;
  promoPrice?:number;
  promo?: number;
}
export interface CartProduct extends Product {
  quantity: number;
  total:number;
  totalPromo?:number;
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
