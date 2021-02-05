import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types/account';

import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productServ: ProductsService
  ) { }

  id = this.route.snapshot.paramMap.get('id');
  product$ = new Observable<Product>();

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.product$ = this.productServ.getProduct(this.id);
  }

}
