import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartProduct, Product } from '../../products';
import { CartService } from '../../cart.service';
import { ShopService } from '../../shop.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  products:Product[] = [] ;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService, private shopService: ShopService
  ) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product as CartProduct);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.shopService.getProducts().subscribe((arg:Product[]) =>
    {
      this.product = arg.find(
        (product:Product) => product.id === productIdFromRoute
      );
    });
  }
}
