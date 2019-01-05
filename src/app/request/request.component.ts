import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public serviceType=['Broker','Maid','Cleaner','Laundry','Waiter'];
  constructor() { }

  ngOnInit() {
  }

}
