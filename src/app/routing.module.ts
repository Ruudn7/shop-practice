import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import(`src/app/static-pages/static-pages.module`).then(m => m.StaticPagesModule) },
    { path: 'product', loadChildren: () => import(`src/app/products/products.module`).then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
