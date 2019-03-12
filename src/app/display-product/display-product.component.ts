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
  * left section
   filter items
  */
  filterArray=
  [
        {
        'title':'Price',
        'type':'price',
        'content':['100-500','500-1000','1000-5000','5000-10000'],
        'showList':true
      },
      {
        'title':'Size',
        'type':'size',
        'content':['26','28','30','32','34','36'],
        'showList':false
      },
      {
        'title':'Color',
        'type':'color',
        'content':['Black','Blue','Brown','Green','Indigo','Beige'],
        'showList':false
      },
      {
        'title':'Gender',
        'type':'gender',
        'content':['Male','Female'],
        'showList':false
      },
      {
        'title':'Discount',
        'type':'discount',
        'content':['Less than 10%','10% or More','20% or More','30% or More','40% or More', '50% or More'],
        'showList':false
      },
      {
        'title':'Customer Ratings',
        'type':'customerRatings',
        'content':['4','3','2','1'],
        'showList':false
      },
];
/**
 * right section 
 * collection of items
 */
collectionOfJeans:Array<Items>;
 
  selectSortingType="Sort By";
  toggleBox:boolean=false;
  sortByArray=["Best Matches","Price Low to High","Price High to Low","Product Name A-Z","Product Name Z-A","Most Popular","Top Sellers"];
  pagerObj:any;
  showArray:Array<any>=[];
  constructor(private _itemsService:ItemsService, private route:Router ) { 
    this.collectionOfJeans=
    [
      {
        'link':'./assets/images/boys-jeans/boys-jeans1.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/boys-jeans/boys-jeans2.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/boys-jeans/boys-jeans3.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/boys-jeans/boys-jeans4.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/boys-jeans/boys-jeans5.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/boys-jeans/boys-jeans6.jpg',
        'filter':'male',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      { 
        'link':'./assets/images/boys-jeans/boys-jeans7.jpg',
         'filter':'male',
         'brand':'Flying Machine',
         'title':"Skinny Men blue jeans",
         'price':'899',
         'originalPrice':'1200',
         'offer':'30%'
      },
      {
        'link':'./assets/images/ladies-jeans/Ladies-jeans1.jpg',
        'filter':'female',
        'brand':'Flying Machine',
        'title':"Skinny Men blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/ladies-jeans/Ladies-jeans2.jpg',
        'filter':'female',
        'brand':'Flying Machine',
        'title':"Skinny Women's blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/ladies-jeans/Ladies-jeans3.jpg',
        'filter':'female',
        'brand':'Flying Machine',
        'title':"Skinny Women's blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/ladies-jeans/Ladies-jeans4.jpeg',
        'filter':'female',
        'brand':'Flying Machine',
        'title':"Skinny Women's blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      },
      {
        'link':'./assets/images/ladies-jeans/Ladies-jeans5.jpg',
        'filter':'female',
        'brand':'Flying Machine',
        'title':"Skinny Women's blue jeans",
        'price':'899',
        'originalPrice':'1200',
        'offer':'30%'
      } 
    ];
    this.pagerObj={'pageArray':[1,2,3,4], 'totalPages':0 , 'itemsPerPage':6, 'productArray':this.collectionOfJeans};    
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
  toggleFun(list){
    list.showList=!list.showList;
  }
  toggleSelectBox(){
    this.toggleBox=!this.toggleBox;
  }
  selectedItem(item){
    this.selectSortingType=item;
    this.toggleBox=false;
  }
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
