import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public title:string = 'Welcome!';
  constructor() {
    console.log("KreisIndustries WelcomeComponent")
  }

  ngOnInit() {
    console.log("KreisIndustries WelcomeComponent")
  }

}
