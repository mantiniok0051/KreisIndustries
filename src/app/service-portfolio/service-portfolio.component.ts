import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'service-portfolio',
  templateUrl: './service-portfolio.component.html',
  styleUrls: ['./service-portfolio.component.css']
})
export class ServicePortfolioComponent implements OnInit {
  public title:string = 'Services';
  constructor() { }

  ngOnInit() {
  }

}
