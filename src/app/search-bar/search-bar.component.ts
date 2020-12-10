import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Query {
  destination?: string;
  category?: string;
  price?: number;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   *
   * @param query Navigate to Search result page
   */
  goToSearch(query: any): void {

    // mock query
    const mockQueryData: Query = {
        category: 'beach_tours',
    };

    this.router.navigate(['/search'], {queryParams: mockQueryData});
  }
}
