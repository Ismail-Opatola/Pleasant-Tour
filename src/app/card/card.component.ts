import { Component, OnInit, Input } from '@angular/core';
import { faPlane, faTag, faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData;
  @Input() tourCard: boolean;


  constructor() { }

  faPlane = faPlane;
  faTag = faTag;
  faStar = faStar;

  ngOnInit(): void {
  }

}
