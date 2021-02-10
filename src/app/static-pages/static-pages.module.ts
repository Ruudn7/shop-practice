import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login/login.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HomeComponent,
    LoginPageComponent,
    ProtectedPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class StaticPagesModule { }
