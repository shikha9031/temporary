import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-store-location',
  templateUrl: './store-location.component.html',
  styleUrls: ['./store-location.component.scss']
})
export class StoreLocationComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 22.572645;
  lng: number = 88.363892;

  constructor() { }

  ngOnInit() {
  //   var myCenter = new google.maps.LatLng(23.667262, 86.021245);
  //   let mapProp  = {
  //     center: myCenter,
  //     zoom: 5,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  // };
  // let map = new google.maps.Map(document.getElementById("googleMap"), mapProp );
  }
}
