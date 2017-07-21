import { Component, ViewEncapsulation, Input } from '@angular/core';

import { CurriculumItems } from '../../shared/cv-items/cv-items';

export interface TimelineItem {
  id: string;
  title: string;
  duration?: string;
  institution?: string;
  icon?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {

  @Input()
  public timelineItems: TimelineItem[];

  constructor(public cvItems: CurriculumItems) { }


  getTimelineItems() {
    return this.timelineItems;
  }

}
