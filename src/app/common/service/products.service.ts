import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable()

  export class ProductsService {
    usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
    userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
    items:Observable<any[]>;
    updatedItem:Promise<any>;

   constructor(private db: AngularFireDatabase) { }
 
    // Read Dynamic Menu
    GetProductsList() {
     this.items = this.db.list('products').valueChanges();
    
     return this.items;
   }
   submitUpdate(index1:any, index2:any, products:any){
      // this.updatedItem=this.db.list('products').update(products[index1].category,{
      //    "":""
      // })
   }
//    addHeaderMenu(type){
//      return this.db.list('menu').push({
//          type:type
//      })
//    }
//    updateUserList(){
//      return this.db.list('menu');
//   }
}