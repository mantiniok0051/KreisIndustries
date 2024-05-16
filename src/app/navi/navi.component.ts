import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
   public items:string[] = ['Welcome', 'About', 'Services', 'Brands', 'Gallery', 'Contact'];

  constructor() {
    console.log("KreisIndustries NaviComponent")
  }

  ngOnInit() {
    console.log("KreisIndustries NaviComponent")
  }

}

