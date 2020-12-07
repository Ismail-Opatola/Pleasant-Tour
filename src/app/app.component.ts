import { Component } from '@angular/core';
import { faPhone, faSearch, faEnvelope, faMap, faSitemap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pleasant-tour';
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faSearch = faSearch;
  faMap = faMap;
  faSitemap = faSitemap;
}
