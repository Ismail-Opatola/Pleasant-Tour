import { Component, OnInit } from '@angular/core';
import { faSearch, faMap, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tourCard = true;

  categories: any[] ;
  bestOffers: any[] ;

  faSearch = faSearch;
  faMap = faMap;
  faThumbsUp = faThumbsUp;

  ngOnInit(): void {
    this.categories = [
      {
      title: 'Cruise & Voyage', 
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'cruise-tours'
      },
      {title: 'Beach Tours',
      img: 'assets/img/142928_3e1483b4.jpg',
       link: 'beach-tours'
      },
      {title: 'Mountain Tours', 
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'mountain-tours'
    },
      {title: 'Architectural Tours', 
      img: 'assets/img/142928_3e1483b4.jpg',
      link: 'architectural-tours'
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
         link: 'beach-tours',
         price: '$10,000',
         rating: 4.5,
         destination: 'Lagos - Coasta Rica'
        },
        {title: 'Kilimanjaro Hicking & Camping Tour',
        img: 'assets/img/142928_3e1483b4.jpg',
        link: 'mountain-tours',
        price: '$1000',
        rating: 4.5,
        destination: 'Lagos - Kenya'
      },
        {title: 'Experience Morroco Market & Events Tour',
        img: 'assets/img/142928_3e1483b4.jpg',
        link: 'architectural-tours',
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
