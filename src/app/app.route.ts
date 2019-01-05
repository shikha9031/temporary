import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//custom component
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
// import { AddUserComponent } from './adduser/adduser.component';

const appRoutes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'requestPage', component: RequestComponent },
  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule],
})
export class AppRoute { }