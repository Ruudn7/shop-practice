import { Directive, HostListener, Input, Optional } from '@angular/core';
import { Filter } from 'src/app/types/account';

import { FiltersContainerDirective } from './filters-container.directive';

@Directive({
  selector: '[appFiltersItem]'
})
export class FiltersItemDirective {

  @Input() filter!: Filter;

  constructor(
    @Optional() private filterContainer: FiltersContainerDirective
  ) { }

  @HostListener('click') click(): void {
    this.clickOnFilter();
  }

  clickOnFilter(): void {
    this.filterContainer.registerFilters(this.filter);
  }

}
