import {  ChangeDetectorRef, Component, OnDestroy, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  isMobile = false;
  ngOnInit(): void {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.isMobile = true;
    }
  }
  opened: boolean = false;
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  constructor(private cartService: CartService, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  getCartLength(){
    return this.cartService.getItems().length
  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/