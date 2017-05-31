import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string = 'About';
  public height:number = 720;
  public width:number = 1280;
  public quote:string = 'Me enseñaron que quien piensa como yo está loco, fué cuando decidí seguir así... ¡Loco!';
  public bio:string = 'I’m up to something. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Eliptical talk. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? They don’t want us to eat. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. Hammock talk come soon. In life you have to take the trash out.';
  public philosophy:string = 'Let’s see what Chef Dee got that they don’t want us to eat. Another one. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Life is what you make it, so let’s make it. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there.';
  constructor() { }

  ngOnInit() {
  }

}
