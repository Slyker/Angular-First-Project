import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}
  getItem(id: number) {
    return this.items.find((x) => x.id === id);
  }
  deleteItemById(id: number) {
    this.items = this.items.filter((x) => x.id !== id);
  }
  deleteItem(item: Product) {
    this.items = this.items.filter((x) => x !== item);
  }
  addToCart(product: Product) {
    this.items.push(product);
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
