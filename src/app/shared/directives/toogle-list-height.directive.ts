import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appToogleList]'
})
export class ToogleListHeightDirective {

  @Input() maxHeight = 400;

  @HostBinding('style.maxHeight.px')
  number = 0;

}
