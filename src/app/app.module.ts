import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductAlertsComponent } from './shop/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { ShippingComponent } from './shop/shipping/shipping.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from "@angular/material/table"
import { MatFormFieldModule } from '@angular/material/form-field';
import { BackButtonDirective } from './directives/back/backButton.directive';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule
    

  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    BackButtonDirective,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
