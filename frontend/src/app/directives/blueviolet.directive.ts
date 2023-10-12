import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueviolet]'
})
export class BluevioletDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'blueviolet'
   }

}
