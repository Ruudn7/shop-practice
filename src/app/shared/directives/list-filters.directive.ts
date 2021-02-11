import { AfterContentInit, Directive, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[appListFilters]'
})
export class ListFiltersDirective implements AfterContentInit {

  constructor(
    private elem: ElementRef
  ) { }

  ngAfterContentInit(): void {
  }

}
