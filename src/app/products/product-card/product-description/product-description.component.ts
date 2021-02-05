import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/account';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() product!: Product | null;
  constructor() { }

  ngOnInit(): void {
  }

}
