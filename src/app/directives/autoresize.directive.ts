import {Directive, ElementRef, HostListener, AfterViewInit, AfterViewChecked} from '@angular/core';

@Directive({
  selector: '[autoResize]'
})
export class AutoresizeDirective implements AfterViewInit {
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngAfterViewInit() {
    setTimeout(() => this.onKeyDown(null), 200);
  }

  @HostListener('keydown', ['$event'])
  @HostListener('change', ['$event'])
  @HostListener('cut', ['$event'])
  @HostListener('paste', ['$event'])
  @HostListener('drop', ['$event'])
  onKeyDown(e: Event) {
    setTimeout(() => {
      this.el.style.height = '1px';
      this.el.style.height = (this.el.scrollHeight) + 'px';
      this.el.scrollTop = 2;
    }, 1);
  }
}
