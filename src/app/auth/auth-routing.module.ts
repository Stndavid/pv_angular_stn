import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{path: 'dashboard', component : DashboardComponent},
  //{path: 'product', component : ProductComponent},
  //{path: 'category', component : CategoryComponent},
  //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //{path: '**', component:NoPagesFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
