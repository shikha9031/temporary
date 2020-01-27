import { Component, OnInit } from '@angular/core';
import { Products } from '../../common/model/product.interface';
import { ProductService } from './product.service';
import { ProductsService } from '../../common/service/products.service'; 
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class productComponent implements OnInit{
  /*** interface object */
  productsArray:Products[];
  product = new Products();
  item:any;

  showForm:boolean=true;
  index:any=-1;
  index2:any;
  $key:any;
  name:any;
  /** modal */
  showFlag:boolean=false;
  deleteDiff:any;
  /*** edit products */
   toggleText= '';
  updateCurrentItem:boolean=false;

  ngOnInit(){
   
  }
constructor( private appServiceObject:ProductService,
  private productsService:ProductsService,
 )// public dialog: MatDialog 
{
/** fetch data */



  let promise= this.productsService.GetProductsList();
    promise.subscribe(items=>{
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
       this.productsService.submitCategory(this.product);      
     }
     else{
        this.productsService.updateCategory(this.product);
     }
     this.product = Object.assign({}); 
   }
   updateCategory(param){
      this.product = Object.assign({}, param);
      console.log(this.product);  
   }
   deleteCategory(param:any){
     this.$key=param.$key;
     this.showFlag=true;
     this.deleteDiff='category';
   }
  
   /** items section */
   submitItemForm(){
    if(this.updateCurrentItem)//this.index && !this.index
    {
      this.product.type = this.productsArray[this.index2].type;
      this.product.$key=this.$key;
      this.product.name = this.name;      
      this.product.type[this.index]=this.item;    
    }
    else{
      this.product.name = this.name;
      this.product.$key = this.$key;
     // this.product.type = ;
      this.product.type.push(this.item);
      if(this.index>=0){
        this.productsArray[this.index2].type.splice(this.index,1); 
        this.productsService.insertItem(this.productsArray[this.index2]);       
      }
    }
    let promise =  this.productsService.insertItem(this.product);  
      this.resetItems();
   }
   selectKey(param){    
     this.$key = param.$key;
     this.product.type = param.type;
     console.log(param,"  ", this.index2);
     if(this.productsArray[this.index2] && this.productsArray[this.index2].name == param.name)
         this.updateCurrentItem=true;
     else
         this.updateCurrentItem=false;
     if(!param.type){
      this.product.type=[];
     }
   }
   resetItems(){
    this.product = Object.assign({});
    this.item='';
    this.index = -1;    
    this.name='';
    this.$key='';
    this.updateCurrentItem= false;
    this.toggleText = '';
   }
   updateBlock(index1, index2, param:any, param2,type:any){
     if(type=='Delete')
      {
        this.showFlag=true;
        this.deleteDiff="item";        
      }
      else{
        this.toggleText= 'Edit';
      }
     this.index = index1;
     this.index2 = index2;
     this.item = param;
     this.updateCurrentItem=true;     
     this.name = param2.name;
     this.$key = param2.$key;
     this.product.type= param2.type;
   }
   /*** open modal */
   receiveContent(event){
    if(!event)
     {
       this.showFlag= event;        
     }
    else{
      if(this.deleteDiff=='category')
      {
        this.productsService.deleteCategory(this.$key);
        this.showFlag=!event;
      }
      else if(this.deleteDiff=='item')
      {
        console.log(this.index);
        this.product = this.productsArray[this.index2];
        this.product.type.splice(this.index,1);
        console.log(this.product);
        this.showFlag=!event;
        this.productsService.insertItem(this.product);
       // console.log(this.product);
      }
         
    }
  }
}