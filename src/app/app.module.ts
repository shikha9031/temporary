//custom Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { AppRoute } from './app.route';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { OwlModule } from 'ngx-owl-carousel';
//custom service
import { HttpService } from './common/service/http.service';
import { LoginService } from './login/login.service';
import { ProductsService } from './common/service/products.service'; 
import { AngularFireDatabase } from '@angular/fire/database';

//custom component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DisplayProductComponent } from './display-product/display-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RequestComponent,
    DisplayProductComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoute,
    AdminModule,
    OwlModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
  ],
  providers: [HttpService, LoginService, ProductsService, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
