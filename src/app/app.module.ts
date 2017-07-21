import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import 'hammerjs';
// Angular Flex-Layout Library
import {FlexLayoutModule} from '@angular/flex-layout';

// Ng2PageScroll
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { SharedModule } from './shared/shared-module';

import { AppComponent } from './app.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SectionAboutComponent } from './pages/section-about/section-about.component';
import { SectionListComponent } from './pages/section-list/section-list.component';
import { SectionEducationComponent } from './pages/section-education/section-education.component';
import { SectionExperienceComponent } from './pages/section-experience/section-experience.component';

import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SectionAboutComponent,
    SectionListComponent,
    SectionEducationComponent,
    SectionExperienceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    Ng2PageScrollModule.forRoot(),
    SharedModule,
    routing
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
