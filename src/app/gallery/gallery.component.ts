import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public title:string = 'Gallery';
  constructor() {
    console.log("KreisIndustries GalleryComponent")
  }

  ngOnInit() {
    console.log("KreisIndustries GalleryComponent")
  }

}
