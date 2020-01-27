import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Items } from '../common/model/items.interface';
import { ItemsService } from '../common/service/item.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {

/**
 * right section 
 * collection of items
 */
collectionOfJeans:Array<Items>;
 
 
  sortByArray=["Best Matches","Price Low to High","Price High to Low","Product Name A-Z","Product Name Z-A","Most Popular","Top Sellers"];
  pagerObj:any;
  showArray:Array<any>=[];
  constructor(private _itemsService:ItemsService, private route:Router ) { 
    this.collectionOfJeans=
    [
      {
        'link':'./assets/images/bag1.png',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag2.png',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag3.png',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag4.png',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag5.png',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag6.jpg',
        'filter':'male',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      { 
        'link':'./assets/images/bag7.png',
         'filter':'male',
         'brand':'Bee fashionable',
         'title':"Party, Formal, Casual Multicolor  Clutch",
         'price':'598',
         'originalPrice':'1200',
         'offer':'30%'
      },
      {
        'link':'./assets/images/bag8.png',
        'filter':'female',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag9.png',
        'filter':'female',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag10.png',
        'filter':'female',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag11.png',
        'filter':'female',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/bag12.png',
        'filter':'female',
        'brand':'Bee fashionable',
        'title':"Party, Formal, Casual Multicolor  Clutch",
        'price':'598',
        'originalPrice':'1200',
        'offer':'30%'
      } 
    ];
    this.pagerObj={'pageArray':[1,2,3,4], 'totalPages':0 , 'itemsPerPage':8, 'productArray':this.collectionOfJeans};    
    this.pagerObj.totalPages= Math.ceil(this.collectionOfJeans.length/this.pagerObj.itemsPerPage);
    if(this.pagerObj.totalPages<=4)
      {
        this.pagerObj.pageArray=[];
        for(let i=1 ;i <= this.pagerObj.totalPages; i++)
          {
            this.pagerObj.pageArray.push(i);
          }
      }
  }

  ngOnInit()
   { }
 
  paginateArray(event:any){
      setTimeout(()=>{
        this.showArray=event;
        console.log(this.showArray);
      }, 500) 
  }
  chooseProductFunc(list:Items){
   // this._itemsService.setValue(list);
   localStorage.setItem("Items",JSON.stringify(list));
     this.route.navigate(['./showOneProduct'])
  }
}
