import { Component, ViewEncapsulation } from '@angular/core';

import { CurriculumItems } from '../../shared/cv-items/cv-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {

  constructor(public cvItems: CurriculumItems) { }

}
