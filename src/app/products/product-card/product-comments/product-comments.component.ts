import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/account';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {

  @Input() product!: Product | null;
  constructor() { }

  ngOnInit(): void {
  }

}
