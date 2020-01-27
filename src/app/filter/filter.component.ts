import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
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
        'title':'Color',
        'type':'color',
        'content':['Black','Blue','Brown','Green','Indigo','Beige'],
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
toggleBox:boolean=false;
  constructor() { }

  ngOnInit() {}
  toggleFun(list){
    list.showList=!list.showList;
  }
}
