import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { ProductComponent } from './web/product/product.component';
import { CategoryComponent } from './web/category/category.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'product', component : ProductComponent},
  {path: 'category', component : CategoryComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component:NoPagesFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
