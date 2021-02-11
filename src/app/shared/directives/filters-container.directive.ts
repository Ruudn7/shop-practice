import { Directive, ElementRef, ViewChild } from '@angular/core';

import { FilterItemComponent } from './../../products/filters/filter-item/filter-item.component';
import { FiltersItemDirective } from './filters-item.directive';

@Directive({
  selector: '[appFiltersContainer]'
})
export class FiltersContainerDirective {

  @ViewChild(FilterItemComponent) filterList!: FilterItemComponent;
  constructor(
    private el: ElementRef
  ) { }

  filterItems: FiltersItemDirective[] = [];

  registerItems(item: FiltersItemDirective): void {
    this.filterItems.push(item);
    console.log(this.filterItems);
  }

}
