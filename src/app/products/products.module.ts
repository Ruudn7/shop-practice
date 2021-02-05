import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListFiltersComponent } from './product-list-filters/product-list-filters.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: ProductCardComponent },
    { path: 'list', component: ProductListComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        ProductListItemComponent,
        ProductListFiltersComponent
    ],
    exports: [
        ProductCardComponent,
        ProductListComponent
    ]
})
export class ProductsModule {}
