import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appOpenToogleList]'
})
export class OpenToogleListDirective {

  toggleButton = new EventEmitter();

  @HostListener('click')
    toggle(): void {
        this.toggleButton.emit();
    }

}
