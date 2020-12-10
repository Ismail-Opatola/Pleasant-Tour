import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'tours', component: CategoryPageComponent},
  {path: 'tours/:id', component: TourPageComponent},
  {path: 'booking/:id', component: BookingPageComponent}
  // {path: 'booking/:id', component: TourPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
