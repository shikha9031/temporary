import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { productComponent } from './products/product.component';
import { AdminComponent } from './admin.component'


const appAdminRoutes: Routes = [
    { path: 'admin', component: AdminComponent ,
   children:[ 
         { path: 'product', component: productComponent },
    ]
},

];

@NgModule ({
   imports: [ RouterModule.forRoot(appAdminRoutes)],

   exports: [ RouterModule ],
})
export class AdminRoute { }