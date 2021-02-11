import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryPipePipe } from './pipes/category-pipe.pipe';
import { ProductAddToCartComponent } from './product-card/product-add-to-cart/product-add-to-cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCommentsComponent } from './product-card/product-comments/product-comments.component';
import { ProductDescriptionComponent } from './product-card/product-description/product-description.component';
import { ProductListFiltersComponent } from './product-list-filters/product-list-filters.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterItemComponent } from './filters/filter-item/filter-item.component';
import { FilterContainerComponent } from './filters/filter-container/filter-container.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: ProductCardComponent },
    { path: 'list', component: ProductListComponent },
    { path: ':id', component: ProductCardComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        ProductListItemComponent,
        ProductListFiltersComponent,
        CategoryPipePipe,
        ProductDescriptionComponent,
        ProductAddToCartComponent,
        ProductCommentsComponent,
        FilterItemComponent,
        FilterContainerComponent
    ],
    exports: [
        ProductCardComponent,
        ProductListComponent,
        CategoryPipePipe
    ]
})
export class ProductsModule {}
