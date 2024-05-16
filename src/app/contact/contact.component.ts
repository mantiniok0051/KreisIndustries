import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title:string = 'Contact';
  constructor() { 
    console.log("KreisIndustries ContactComponent")
  }

  ngOnInit() {
    console.log("KreisIndustries ContactComponent")
  }

}
