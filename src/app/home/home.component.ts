import { Component, OnInit, Inject, Input,HostListener } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { ViewChild } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  
images=[
  {'image':'../../assets/images/jeans-sale.png'},
  {'image':'../../assets/images/jeans-sale2.jpg'},
  {'image':'../../assets/images/jeans-sale3.jpg'},  
]
@HostListener("window:scroll", [])
onWindowScroll() {
   console.log(window.pageYOffset  +" window lenght");
   if(window.pageYOffset>925){
     $('.collections, .social-widget').css('display','none');

   }
   else{
    $('.collections, .social-widget').css('display','block');
  }
}

  constructor() { }
  
  fun() {
    this.owlElement.next([200])
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel(
        {
          items:1,
          lazyLoad:true,
          loop:true,
          responsiveClass:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true
        }
      );
    });
  }
}
