import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  public title:string = 'Brands';
  constructor() {
    console.log("KreisIndustries BrandsComponent")
  }

  ngOnInit() {
    console.log("Kreis Industries Brands")
  }

}
