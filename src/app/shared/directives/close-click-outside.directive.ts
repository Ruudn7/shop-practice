import { Directive, AfterViewInit, Input, HostListener, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCloseClickOutside]'
})
export class CloseClickOutsideDirective {

  @Input() excludeElem!: HTMLDivElement;

  constructor(
    private elem: ElementRef
  ) {}

  closeElement = new EventEmitter();

  @HostListener('document:click', ['$event.path'])
  getPath(clickPath: Array<any> = []): void {
    if (clickPath.indexOf(this.elem.nativeElement) === -1 && clickPath.indexOf(this.excludeElem) === -1) {
      this.closeElement.emit();
    }
  }

}
