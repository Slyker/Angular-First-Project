import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct, Product } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  constructor(private http: HttpClient) {}
  getProducts() {  
    return this.http.get<Product[]>('/assets/products.json');
  }
}
