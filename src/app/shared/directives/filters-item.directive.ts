import { Directive, Optional } from '@angular/core';

import { FiltersContainerDirective } from './filters-container.directive';

@Directive({
  selector: '[appFiltersItem]'
})
export class FiltersItemDirective {

  constructor(
    @Optional() private filterContainer: FiltersContainerDirective
  ) {
    filterContainer.registerItems(this);
  }



}
