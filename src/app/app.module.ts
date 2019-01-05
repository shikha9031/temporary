//custom Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { AppRoute } from './app.route';

//custom service
import { HttpService } from './common/service/http.service';
import { LoginService } from './login/login.service';

//custom component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';

import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoute,
    AdminModule,
    OwlModule,
  ],
  providers: [HttpService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
