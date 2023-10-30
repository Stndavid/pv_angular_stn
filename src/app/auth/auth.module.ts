import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
  ],
})
export class AuthModule { }
