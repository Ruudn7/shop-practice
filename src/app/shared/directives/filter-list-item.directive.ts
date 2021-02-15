import { Directive, Input, AfterViewInit, HostBinding, Optional } from '@angular/core';
import { FiltersContainerDirective } from './filters-container.directive';

@Directive({
  selector: '[appFilterListItem]'
})
export class FilterListItemDirective implements AfterViewInit {

  @Input() categoryId = '';

  @HostBinding('class.d-none')
  isFiltersActive = false;

  constructor(
    @Optional() private filterContainer: FiltersContainerDirective
  ) { }

  ngAfterViewInit(): void {
    this.filterContainer.registerFiltredItems(this);
  }

  returnItemCategoryId(): string {
    return this.categoryId;
  }

}
