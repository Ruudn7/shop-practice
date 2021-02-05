import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/account';

@Component({
  selector: 'app-product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.scss']
})
export class ProductAddToCartComponent implements OnInit {

  @Input() product!: Product | null;
  constructor() { }

  ngOnInit(): void {
  }

}
