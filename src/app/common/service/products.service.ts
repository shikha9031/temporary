import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire';

// import { AngularFireDatabase } from 'firebase/database';
import { Products } from '../model/product.interface';

@Injectable()

  export class ProductsService {
    productList: AngularFireList<any>;      // Reference to users list, Its an Observable
    //userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
     items:Observable<any[]>;
    updatedItem:Promise<any>;
    productObj= new Products();
    

   constructor(private db: AngularFireDatabase,  private _firebaseApp: FirebaseApp) { 
     // this._firebaseApp.database = () => this.db.database;
   }
 
    // Read Dynamic Menu
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
  // InsertCategory(product:Products){
  //    this.productList.push({
  //       name:product.name,
  //       type:product.type
  //    })
  // }
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
  //let ref = this.db.list('products').ref("/userProfile/"+this.userId);
  
     // ref.child("workouts").push(newWorkout);
 }
//   MyFailureListener implements OnFailureListener {
//   @Override
//   public void onFailure(@NonNull Exception exception) {
//       int errorCode = ((StorageException) exception).getErrorCode();
//       String errorMessage = exception.getMessage();
//       // test the errorCode and errorMessage, and handle accordingly
//   }
// }
}