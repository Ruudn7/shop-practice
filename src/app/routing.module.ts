import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { ProtectedPageComponent } from './static-pages/protected-page/protected-page.component';
import { Roles } from './types/account';

const routes: Routes = [
    { path: '', loadChildren: () => import(`src/app/static-pages/static-pages.module`).then(m => m.StaticPagesModule) },
    { path: 'product', loadChildren: () => import(`src/app/products/products.module`).then(m => m.ProductsModule) },
    {
        path: 'guarded',
        canActivate: [AuthGuard],
        component: ProtectedPageComponent,
        data: [{
            userRoles: [Roles.BUYER] // Single Allowed User
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
