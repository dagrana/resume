import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {NavBarComponent} from './navbar.component';


describe('NavBar', () => {
  let fixture: ComponentFixture<NavBarComponent>;
  let component: NavBarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [NavBarComponent],
    });

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should have a link to material github', () => {
    const githublink = 'https://github.com/angular/material2';
    const links = fixture
      .nativeElement.querySelectorAll('.docs-navbar .mat-button');
    const link  = links[links.length - 1];
    expect(link.getAttribute('href')).toEqual(githublink);
  });
});
