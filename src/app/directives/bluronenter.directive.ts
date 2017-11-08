import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[blurOnEnter]'
})
export class BlurOnEnterDirective {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: Event) {
    if (e['which'] === 13) {
      setTimeout(() => {
        this.el.blur();
      }, 1);
    }
  }
}
