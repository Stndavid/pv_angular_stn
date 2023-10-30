import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { WebRoutingModule } from './web/web-routing.module';
import { WebModule } from './web/web.module';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NoPagesFoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
            WebModule,
            AuthRoutingModule
           ],

  exports: [RouterModule,
    WebModule,
    AuthRoutingModule]
})
export class AppRoutingModule { }
