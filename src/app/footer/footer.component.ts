import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerDetails=[
    {'title':'Company Name', 'value':['Abcd']},
    {'title':'Products', 'value':['Men','Women','Kids']},
    {'title':'Useful Links', 'value':['Home','Products','Customer Service','Our Story']},
    {'title':'Contacts', 'value':['Shapoorji Pallonji, Shukhobristi','abc@gmail.com','+91 123456789','+01 234567890']},  
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
