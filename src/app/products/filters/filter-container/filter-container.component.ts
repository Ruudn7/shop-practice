import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/types/account';

import { ProductsService } from './../../products.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {

  filters$ = new Observable<Filter[]>();

  constructor(
    private productServ: ProductsService
  ) { }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters(): void {
    this.filters$ = this.productServ.getFilters();
  }


}
