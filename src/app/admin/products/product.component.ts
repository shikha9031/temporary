import { Component, OnInit } from '@angular/core';
import { Products } from '../../common/model/product.interface';
import { ProductService } from './product.service';
import { ProductsService } from '../../common/service/products.service'; 

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class productComponent implements OnInit{
  
  // selectedFile: File;
  productsArray:Products[];
  product = new Products();
  selectItem=['Men','Women','Kids'];
  item:any;
  showForm:boolean=true;

  ngOnInit(){
   
  }
constructor( private appServiceObject:ProductService,private productsService:ProductsService )
{
/** fetch data */

  let promise= this.productsService.GetProductsList();
    promise.snapshotChanges().subscribe(items=>{
        this.productsArray=[];
        items.forEach((element, index)=>{          
           var eachItem = element.payload.toJSON();
           eachItem["$key"]=element.key;
           if(eachItem["type"])
           eachItem["type"] = Object.keys(eachItem["type"]).map(key => eachItem["type"][key]);
           this.productsArray.push(eachItem as Products);
        })
        console.log("Get Element",this.productsArray);
    })
  }

  /** category section */

   submitCategoryForm(){
     if(this.product.$key==null){
       this.productsService.InsertCategory(this.product);      
     }
     else{
        this.productsService.updateProduct(this.product);
     }
   }
   updateCategory(param){
      this.product = Object.assign({}, param);
      console.log(this.product);  
   }
   deleteCategory(param:any){
     this.productsService.deleteCategory(param.$key);
   }

   /** items section */
   submitItemForm(){
      this.product.type.push(this.item);
      this.productsService.insertItem(this.product);
      this.resetItems();
   }
   selectKey(param){
     this.product.$key=param.$key;
     if(param.type)
     this.product.type=param.type;
     else
      this.product.type=[];
   }
   resetItems(){
    this.product= Object.assign({});
    this.item='';
   }
}