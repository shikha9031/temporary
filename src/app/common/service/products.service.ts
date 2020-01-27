import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire';

import { Products } from '../model/product.interface';

@Injectable()

  export class ProductsService {
    productList: AngularFireList<any>;  
     items:Observable<any[]>;
    updatedItem:Promise<any>;
    productObj= new Products();
    
   constructor(private db: AngularFireDatabase,  private _firebaseApp: FirebaseApp) { }
 
    GetProductsList() {
     this.items = this.db.list('products').snapshotChanges();
     return this.items;
   }
   submitCategory(category){
     console.log(category);
    return this.db.list('products').push({
        name:category.name,
        type: []
     })
   }
 updateCategory(product:Products){
  this.db.list('products').update(product.$key,{
      name:product.name, 
    })
 }
 deleteCategory($key : string){
  this.db.list('products').remove($key);
 }
 insertItem(product:Products){
   console.log(product);
  return this.db.list('products').update(product.$key,{
    name:product.name,
    type:product.type
  }).catch(error=>{
     console.log(error);
  })
 }
}