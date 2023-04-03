import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnChanges {

  // @Input() bColor: string = "white";
    @Input('appBorderStyle') bColor: string = "white";
  constructor(private el:ElementRef) {
    // el.nativeElement.style.border = `1px solid ${this.bColor}`;
    // el.nativeElement.style.boxShadow = `0 0 7px ${this.bColor}`;
    el.nativeElement.style.borderRadius = "30px";
   }
   ngOnChanges(): void {
    this.el.nativeElement.style.border = `1px solid aqua`;
    this.el.nativeElement.style.boxShadow = `0 0 7px aqua`;
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = `1px solid ${this.bColor}`;
    this.el.nativeElement.style.boxShadow = `0 0 7px ${this.bColor}`;
   }
   @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = `1px solid aqua`;
    this.el.nativeElement.style.boxShadow = `0 0 7px aqua`;
  }
  

}
