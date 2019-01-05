import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './addUser/adduser.component';
import { AdminComponent } from './admin.component'


const appAdminRoutes: Routes = [
    { path: 'admin', component: AdminComponent ,
   children:[ 
         { path: 'adduser', component: AddUserComponent },
    ]
},

];

@NgModule ({
   imports: [ RouterModule.forRoot(appAdminRoutes)],

   exports: [ RouterModule ],
})
export class AdminRoute { }