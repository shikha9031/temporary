import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//custom component
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
// import { AddUserComponent } from './adduser/adduser.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { StoreLocationComponent } from './store-location/store-location.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';

const appRoutes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'requestPage', component: RequestComponent },
    { path: 'displayProduct', component: DisplayProductComponent },
    { path: 'storeLocation', component: StoreLocationComponent }, 
    { path: 'showOneProduct', component:ShowOneProductComponent }   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule],
})
export class AppRoute { }