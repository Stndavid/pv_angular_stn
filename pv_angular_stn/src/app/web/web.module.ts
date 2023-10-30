import { NgModule } from '@angular/core';
import { CommonModule, provideCloudflareLoader } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WebModule { }
