import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { WebComponent } from './web.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { WebModule } from './web.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [

  {
    path: 'dashboard/',
    component: WebComponent, children: [

      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
 
  ],
  exports: [RouterModule]

})
export class WebRoutingModule { }
