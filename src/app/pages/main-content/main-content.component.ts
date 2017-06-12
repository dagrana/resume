import { Component, OnInit } from '@angular/core';

import { CurriculumItems } from '../../shared/cv-items/cv-items';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(public cvItems: CurriculumItems) { }

  ngOnInit() {
  }

}
