import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//custom component
import { LoginComponent } from './login/login.component';
// import { AddUserComponent } from './adduser/adduser.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { StoreLocationComponent } from './store-location/store-location.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
    
    { path: '', redirectTo: 'displayProduct', pathMatch: 'full' },
    { path: 'displayProduct', component: DisplayProductComponent },    
    { path: 'login', component: LoginComponent },
    { path: 'storeLocation', component: StoreLocationComponent }, 
    { path: 'showOneProduct', component:ShowOneProductComponent },
   // {  path: 'admin/*', loadChildren:'./admin/admin.module#lazyAdminModule'},
    //{ path: '**', component:PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule],
})
export class AppRoute { }