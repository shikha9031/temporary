import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';

import { HttpService } from '../common/service/http.service';
import { addUserService } from './addUser/adduser.service'

import { AddUserComponent } from './addUser/adduser.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';

import { AdminRoute } from './admin.route';


@NgModule({
  declarations: [
    AddUserComponent,
    AdminComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoute,
    // HttpClientModule 
  ],
  providers: [HttpService, addUserService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
