import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Filter, Product } from 'src/app/types/account';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$ = new Observable<Product[]>();
  filters$ = new Observable<Filter[]>();

  constructor(
    private productServ: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getFilters();
  }

  getProducts(): void {
    this.products$ = this.productServ.getProducts();
  }

  getFilters(): void {
    this.filters$ = this.productServ.getFilters();
  }

}
