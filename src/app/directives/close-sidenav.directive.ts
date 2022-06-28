import { Directive, HostListener, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCloseSidenav]'
})
export class CloseSidenavDirective {
  @Input() public sideNav:any;
  constructor() {}
  @HostListener("click")
  onClick(){   
    if(this.sideNav.opened){
      this.sideNav.close();
    }   
  }
}
