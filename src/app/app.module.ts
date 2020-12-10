import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchPageComponent } from './search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    CardComponent,
    VideoComponent,
    AboutPageComponent,
    TourPageComponent,
    BookingPageComponent,
    CategoryPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
