import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { AuthModule } from './auth/auth.module';
import { WebModule } from './web/web.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPagesFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    WebModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
