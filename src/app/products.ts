export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: number;
  lowStock?: number;
  promo?: number;
}
export interface CartProduct {
  quantity: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    inStock: 150,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    inStock: 50,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: "A basic phone don't know why buy this one",
    inStock: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
