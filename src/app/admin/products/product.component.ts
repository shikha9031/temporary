import { Component } from '@angular/core';
import { LoginClass } from '../../common/module/login.interface';
import { ProductService } from './product.service'
import { ProductsService } from '../../common/service/products.service'; 

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class productComponent {
  
  loginClassObject=new LoginClass();
  email:string='';
  password:string='';
  selectedFile: File;
  productsArray:Array<any>;
  ItemObj={'category':'','item':''};
  selectItem=['Men','Women','Kids'];
  index1:any;
  index2:any;

constructor( private appServiceObject:ProductService,private productsService:ProductsService )
{
  let promise= this.productsService.GetProductsList();
  promise.subscribe(res=>{
    this.productsArray=res;
    //console.log(res);
    })
  }
   login(){
       if(this.email=='' || this.password=='')
        {
          alert("please fill both");
        }
        else
          {
            let res;
            res=this.appServiceObject.submitApp(this.email, this.password);
            res.then(data=>{
                console.log(data);
            
            });
             
          }
   }
   uploadImage(event){
    //const file = event.target.files[0];
    this.selectedFile=event.target.files[0];
   // console.log(this.selectedFile);
   }
   uploadSelectedFile(){
     const uploadData = new FormData();
    // uploadData.append(this.selectedFile);
    let res= this.appServiceObject.submitImage(this.selectedFile);
    // res.then(data=>{
    //   console.log(data);
    // }).catch(error=>{
    //   console.log(error);
    // });
   }
   updateBlock(index1, index2, update){
     this.index1=index1;
     this.index2=index2;
     if(update=='Edit'){
      this.ItemObj.category= this.productsArray[index1].category;
      this.ItemObj.item=this.productsArray[index1].type[index2];
     }
     else if( update =='Delete') {

     }
 
   }
   submitUpdateForm(){
    this.productsArray[this.index1].category=this.ItemObj.category;
    this.productsArray[this.index1].type[this.index2]=  this.ItemObj.item;
    let promise = this.productsService.submitUpdate(this.index1, this.index2, this.productsArray);

   }
}