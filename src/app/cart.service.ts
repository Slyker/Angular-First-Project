import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct, Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartProduct[] = [];
  total: number = 0;
  constructor(private http: HttpClient) {}
  getItem(id: number) {
    return this.items.find((x) => x.id === id);
  }
  deleteItemById(id: number) {
    this.items = this.items.filter((x) => x.id !== id);
    this.getTotal();
    return this.items
  }
  deleteItem(item: CartProduct) {
    this.items = this.items.filter((x) => x !== item);
    this.getTotal();
    return this.items
  }
  getProductTotals(product:CartProduct){
    if(!product.total){
      product.quantity = 1
    }
    product.total = product.quantity * product.price
    if(product.promo){
      product.promoPrice = product.price * (1-product.promo/100)
      product.total = product.quantity * product.promoPrice
    }
   return product.total
  }
  addToCart(product: CartProduct) {
    let prod = this.getItem(product.id)
    if(prod){
      prod.quantity += 1
      return
    }
    this.getProductTotals(product);

    this.items.push(product);
    this.getTotal();
  }
  getTotal(){  
    this.total = this.items.map(t => t.total).reduce((acc, value) => acc + value, 0);;
    return this.total
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
