//custom Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { AppRoute } from './app.route';

import { environment } from '../environments/environment';
//custom service
import { HttpService } from './common/service/http.service';
import { LoginService } from './login/login.service';
import { ProductsService } from './common/service/products.service'; 
import { ItemsService } from './common/service/item.service';

// external modules
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { OwlModule } from 'ngx-owl-carousel';
import { AdminModule } from './admin/admin.module';

//custom component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DisplayProductComponent } from './display-product/display-product.component';

// custom directives
import { DropZoneDirective } from './common/directive/drop-zone.directive';
import { StoreLocationComponent } from './store-location/store-location.component';
import { AgmCoreModule } from '@agm/core';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { FilterComponent } from './filter/filter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DisplayProductComponent,
    PaginationComponent,
    DropZoneDirective,
    StoreLocationComponent,
    ShowOneProductComponent,
    FilterComponent,
    PageNotFoundComponent,
    NotificationComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXa1WQzToUcwh9NmK7X3DHxCUSZaHGwDY',
      libraries: ['places']
    })
  ],
  providers: [HttpService, LoginService, ProductsService, AngularFireDatabase, ItemsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
