import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct, products } from './products';

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
  addToCart(product: CartProduct) {
    let prod = this.getItem(product.id)
    if(prod){
      prod.quantity += 1
      return
    }

    product.quantity = 1
    this.items.push(product);
    this.getTotal();
  }
  getTotal(){
    this.total = 0;
    this.items.forEach(element => {
      this.total += element.price * element.quantity
    });
    return this.total
  }
  getItems() {
    if(this.items.length===0){
      let testToDELETE = products[products.length-1] as CartProduct
      testToDELETE.quantity = 1   
      this.items.push(testToDELETE)
    }

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
