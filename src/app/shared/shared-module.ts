import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Ng2PageScroll
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NavBarComponent } from './navbar/navbar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CurriculumItems } from './cv-items/cv-items';
import { SidenavService } from './services/sidenav.service';


@NgModule({
    imports: [
        HttpModule,
        RouterModule,
        BrowserModule,
        MaterialModule,
        Ng2PageScrollModule
    ],
    declarations: [NavBarComponent, TimelineComponent],
    exports: [NavBarComponent, TimelineComponent],
    providers: [CurriculumItems, SidenavService]
})
export class SharedModule { }
