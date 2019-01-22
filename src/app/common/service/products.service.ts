import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Products } from '../model/product.interface';

@Injectable()

  export class ProductsService {
    productList: AngularFireList<any>;      // Reference to users list, Its an Observable
    userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
    items:Observable<any[]>;
    updatedItem:Promise<any>;
    productObj= new Products();
    

   constructor(private db: AngularFireDatabase) { }
 
    // Read Dynamic Menu
    GetProductsList() {
     this.productList = this.db.list('products');
     return this.productList;
     
   }
   submitCategory(category){
    return this.db.list('products').push({
        category:category,
        type:[]
     })
   }
  InsertCategory(product:Products){
     this.productList.push({
        name:product.name,
        type:product.type
     })
  }
 updateProduct(product:Products){
    this.productList.update(product.$key,{
      name:product.name, 
    })
 }
 deleteCategory($key : string){
   this.productList.remove($key);
 }
 insertItem(product:Products){
   console.log(product);
  //  var database = firebase.database();

  this.productList.update(product.$key,{
    name:product.name,
    type:product.type
  })
  //let ref = this.db.list('products').ref("/userProfile/"+this.userId);
  
     // ref.child("workouts").push(newWorkout);
 }
/**
 * name:product.name, 
    type:product.type
 */
}