import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { faSearch, faMap, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const stubImgUrl = 'assets/img/142928_3e1483b4.jpg';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  tourCard = true;

  categories: any[] ;
  bestOffers: any[] ;

  faSearch = faSearch;
  faMap = faMap;
  faThumbsUp = faThumbsUp;

  ngOnInit(): void {
    // fetch best tour data

    this.categories = [
      {
      title: 'Cruise & Voyage',
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'cruise_tours'
      },
      {title: 'Beach Tours',
      img: 'assets/img/142928_3e1483b4.jpg',
       link: 'beach_tours'
      },
      {title: 'Mountain Tours',
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'mountain_tours'
    },
      {title: 'Architectural Tours',
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'architectural_tours'
    }
    ];

    this.bestOffers = [
      {
        title: 'Luxuriuos South Asia 360 Cruise',
        img: 'assets/img/142928_3e1483b4.jpg',
        link: 'cruise-tours',
        price: '$1000',
        rating: 4.5,
        destination: 'Lagos - Asia'
        },
        {title: '60 days Transatlantic Boat Cruise',
        img: 'assets/img/142928_3e1483b4.jpg',
         link: 'beach_tours',
         price: '$10,000',
         rating: 4.5,
         destination: 'Lagos - Coasta Rica'
        },
        {title: 'Kilimanjaro Hicking & Camping Tour',
        img: 'assets/img/142928_3e1483b4.jpg',
        link: 'mountain_tours',
        price: '$1000',
        rating: 4.5,
        destination: 'Lagos - Kenya'
      },
        {title: 'Experience Morroco Market & Events Tour',
        img: 'assets/img/142928_3e1483b4.jpg',
        link: 'architectural_tours',
        price: '$1000',
        rating: 4.5,
        destination: 'Lagos - Morrocco'
      }
    ];
  }
  showTourCard(event): void {
    if ( event ) {
      this.tourCard = true;
    }
  }

}
