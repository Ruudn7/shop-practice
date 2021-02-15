import { ContentChild, Directive, EventEmitter, Output, QueryList } from '@angular/core';
import { Filter } from 'src/app/types/account';

import { FilterListItemDirective } from './filter-list-item.directive';
import { ListFiltersDirective } from './list-filters.directive';

@Directive({
  selector: '[appFiltersContainer]'
})
export class FiltersContainerDirective {

  currentFilters: string[] = [];
  filterFilters: Filter[] = [];
  producsts: FilterListItemDirective[] = [];

  @Output() countVisibleProducts = 0;
  @Output() itemCounter = new EventEmitter();
  @ContentChild(ListFiltersDirective) list = new QueryList<ListFiltersDirective>();

  registerFilters(filter: Filter): void {
    if (!this.currentFilters.includes(filter.category)) {
      this.currentFilters.push(filter.category);
    } else {
      this.currentFilters = this.currentFilters.filter(el => el !== filter.category);
    }

    this.showItems();
  }

  registerFiltredItems(item: FilterListItemDirective): void {
    this.producsts.push(item);
  }

  showItems(): void {
    this.countVisibleProducts = 0;
    if (this.currentFilters.length) {
      this.producsts.forEach(
        el => {
          if (this.currentFilters.some(catId => catId === el.categoryId)) {
            this.countVisibleProducts++;
            el.isFiltersActive = false;
          } else {
            el.isFiltersActive = true;
          }
        }
      );
    } else {
      this.producsts.forEach( el => el.isFiltersActive = false);
    }

  }

}
