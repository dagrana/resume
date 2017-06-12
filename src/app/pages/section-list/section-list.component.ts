import {Component} from '@angular/core';
import { CurriculumItems } from '../../shared/cv-items/cv-items';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent {
  constructor(public cvItems: CurriculumItems) {}

}
