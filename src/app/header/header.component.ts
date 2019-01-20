import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../common/service/products.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
/** products */

productsArray:Array<any>;
  constructor(private _router:Router, private productsService:ProductsService) { 
    let promise= this.productsService.GetProductsList();
      promise.subscribe(res=>{
        this.productsArray=res;
        //console.log(res);
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
