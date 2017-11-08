import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

// директива применяется к элементу для отслеживания внешних кликов
@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  // обработчик события
  @Output() public clickOutside = new EventEmitter();

  // обрабатывает события по клику, затем отлавливает клики находящиееся вне элемента
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

  // конструктор принимает элемент к которому применяется директива
  constructor(private _elementRef: ElementRef) {
  }
}
