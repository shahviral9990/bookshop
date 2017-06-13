import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterComponent } from './router.component';
import { router } from "./app.route";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
