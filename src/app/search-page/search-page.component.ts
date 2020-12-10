import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

interface ParamQuery {
  destination?: string;
  category?: string;
  price?: number;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {
  searchResults: any[];
  paramQuery: ParamQuery;
  resultLength: number;

  constructor(private activatedRoute: ActivatedRoute, public apiService: ApiService) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.paramQuery = {
        destination: data.destination,
        category: data.category,
        price: data.price,
      };
    });
  }

  ngOnInit(): void {
    // load the data from service
    // this.apiService.search(this.paramQuery).subscribe(data => {
    //   this.searchResults = data;
    //   this.resultLength = data.length;
    // });

    this.apiService.getAllTours().subscribe(data => {
      this.searchResults = data;
      this.resultLength = data.length;
    });
  }

}
