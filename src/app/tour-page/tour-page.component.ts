import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

interface ParamQuery {
  id: string;
}

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss']
})
export class TourPageComponent implements OnInit {

  tourData: any;
  paramQuery: ParamQuery;

  constructor(private activatedRoute: ActivatedRoute, public apiService: ApiService) {
    this.activatedRoute.params.subscribe(data => {
      this.paramQuery = {
        id: data.id,
      };
    });
   }

  ngOnInit(): void {
  this.apiService.getTour(this.paramQuery.id).subscribe(data => {
    this.tourData = data[0];
    console.log(data);
  });
  }

  handleTourBooking(tourData: any): void {
    // TODO: navigate to booking form page
  }
}
