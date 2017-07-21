import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionEducationComponent {
  constructor() { }

  getTimelineItems() {
    return [
      {
        id: 'university2',
        title: 'Bachelor’s Degree in Industrial Electronics and Automation Engineering',
        duration: '2007 - 2009',
        institution: 'vigo university',
        icon: 'school'
      },
      {
        id: 'university',
        title: 'Bachelor’s Degree in Industrial technical engineering (Industrial electronics speciality)',
        duration: '2002 - 2006',
        institution: 'vigo university',
        icon: 'school'
      },
      {
        id: 'highschool',
        title: 'high school graduate',
        duration: '2000 - 2002',
        institution: 'Ramón Cabanillas High School',
        icon: 'school'
      }
    ];
  }
}
