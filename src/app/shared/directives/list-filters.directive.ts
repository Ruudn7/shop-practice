import { Directive } from '@angular/core';

import { FilterListItemDirective } from './filter-list-item.directive';

@Directive({
  selector: '[appListFilters]'
})
export class ListFiltersDirective {

  products: FilterListItemDirective[] = [];


  registerFiltredItems(products: FilterListItemDirective[]): void {
    this.products = products;
  }

}
