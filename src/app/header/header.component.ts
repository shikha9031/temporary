import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../common/service/products.service'; 
import { Products } from '../common/model/product.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
/** products */
products=['JEANS','TEES','SHIRTS','JACKETS','SWEATERS','SWEATSHIRTS'];

productsArray:Array<any>;
  constructor(private _router:Router, private productsService:ProductsService) { 
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

  ngOnInit() {
  }
  ngAfterViewInit(){
     window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
  logOut(){
    this._router.navigate(['./login']);
  }
}
