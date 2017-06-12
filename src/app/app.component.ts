import { Component, ViewEncapsulation } from '@angular/core';

import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-cv',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  showShadow = true;

  constructor() {
  }
}
