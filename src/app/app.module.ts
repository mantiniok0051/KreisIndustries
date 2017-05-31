import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ServicePortfolioComponent } from './service-portfolio/service-portfolio.component';
import { BrandsComponent } from './brands/brands.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NaviComponent } from './navi/navi.component';

const appRoutes:Routes= [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service-potfolio', component: ServicePortfolioComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ServicePortfolioComponent,
    BrandsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
