import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
 
  filterArray=
  [
        {
        'title':'Price',
        'type':'price',
        'content':['100','500','1000','5000','10000'],
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
  collectionOfJeans=
  [
    {'link':'./assets/images/boys-jeans/boys-jeans1.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans2.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans3.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans4.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans5.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans6.jpg'},
    {'link':'./assets/images/boys-jeans/boys-jeans7.jpg'},
    {'link':'./assets/images/ladies-jeans/Ladies-jeans1.jpg'},
    {'link':'./assets/images/ladies-jeans/Ladies-jeans2.jpg'},
    {'link':'./assets/images/ladies-jeans/Ladies-jeans3.jpg'},
    {'link':'./assets/images/ladies-jeans/Ladies-jeans4.jpeg'},
    {'link':'./assets/images/ladies-jeans/Ladies-jeans5.jpg'},    
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleFun(list){
    list.showList=!list.showList;
  }
}
