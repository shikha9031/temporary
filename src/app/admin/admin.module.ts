import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';

// custom service 

import { HttpService } from '../common/service/http.service';
import { ProductService } from './products/product.service';
import { UploadService } from '../common/service/upload.service';

import { productComponent } from './products/product.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';

import { AdminRoute } from './admin.route';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { SlidingImageComponent } from './sliding-image/sliding-image.component';

@NgModule({
  declarations: [
    productComponent,
    AdminComponent,
    HeaderComponent,
    NavbarComponent,
    ModalComponent,
    SlidingImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoute,
    // BrowserAnimationsModule,
    // MatDialogModule
    // HttpClientModule 
  ],
  providers: [HttpService, ProductService, UploadService],
  bootstrap: [AdminComponent],
  // entryComponents: [ ModalComponent ]
})
export class AdminModule { }
