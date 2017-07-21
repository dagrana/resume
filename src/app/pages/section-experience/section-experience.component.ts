import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionExperienceComponent {
  constructor() { }

  getTimelineItems() {
    return [
      {
        id: 'imatia3',
        title: 'senior programmer & team leader',
        duration: '2011 - present',
        institution: 'Imatia Innovation S.L.',
        icon: 'work',
        description: 'Programming and developing of rich desktop and web applications'
      },
      {
        id: 'imatia2',
        title: 'junior programmer (Research teaching staff)',
        duration: 'Mar 2010 - Dec 2010',
        institution: 'Vigo University',
        icon: 'work',
        description: 'Programming and developing of rich desktop applications'
      },
      {
        id: 'imatia',
        title: 'junior programmer',
        duration: 'Mar 2009 - Mar 2010',
        institution: 'Imatia Innovation S.L.',
        icon: 'work',
        description: 'Programming and developing of rich desktop applications'
      }
    ];
  }
}
