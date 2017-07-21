import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdSidenav } from '@angular/material';
import { PageScrollInstance, PageScrollService, PageScrollOptions } from 'ng2-page-scroll';

import { CurriculumItems } from '../../shared/cv-items/cv-items';
import { SidenavService } from '../../shared/services/sidenav.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  @ViewChild(MdSidenav) sidenavCmp: MdSidenav;

  constructor(public cvItems: CurriculumItems,
    public sidenavService: SidenavService,
    @Inject(DOCUMENT) private document: any,
    private pageScrollService: PageScrollService) { }

  ngOnInit() {
    if (this.sidenavService) {
      this.sidenavService.sidenav = this.sidenavCmp;
    }
  }

  onItemClick(menuItem: any) {
    this.sidenavCmp.close();
    if (menuItem) {
      // const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#' + menuItem.id);
      const options: PageScrollOptions = {
        document: this.document,
        scrollTarget: '#' + menuItem.id,
        pageScrollDuration: 500,
        pageScrollOffset: 75
      };
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance(options);
      this.pageScrollService.start(pageScrollInstance);
    }

  }

}
