import { Component, OnInit, Inject, Input,HostListener } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { ViewChild } from '@angular/core';
import { ProductsService } from '../common/service/products.service'; 
import { UploadService } from '../common/service/upload.service';
import { Upload } from '../common/model/upload';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  
images:Array<any>;
carouselOptions={
  items: 1, dots: true, navigation: false,responsiveClass:true, autoplay:true
}
@HostListener("window:scroll", [])
onWindowScroll() {
   if(window.pageYOffset>925){
     $('.collections, .social-widget').css('display','none');

   }
   else{
    $('.collections, .social-widget').css('display','block');
  }
}
  constructor(private uploadService:UploadService) {}
  ngOnInit() {
    let promise= this.uploadService.getFiles();
    promise.subscribe(items=>{
      this.images=[];
      items.forEach((element, index)=>{          
         var eachItem = element.payload.toJSON();
         eachItem["$key"]=element.key;
         this.images.push(eachItem as Upload);
      })

      console.log("Get Element", this.images);
  })
  }
}
