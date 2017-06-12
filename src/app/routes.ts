import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {Homepage} from './pages/homepage';
// import {ComponentList} from './pages/component-list';
// import {GuideList} from './pages/guide-list';
// import {ComponentViewer} from './pages/component-viewer/component-viewer';
// import {ComponentCategoryList} from './pages/component-category-list/component-category-list';
// import {ComponentSidenav} from './pages/component-sidenav/component-sidenav';
// import {GuideViewer} from './pages/guide-viewer/guide-viewer';


import { MainContentComponent } from './pages/main-content/main-content.component';
import { SectionListComponent } from './pages/section-list/section-list.component';

const MATERIAL_DOCS_ROUTES: Routes = [
    { path: '',
    component: MainContentComponent,
    children: [
        {path: '', component: SectionListComponent}
    ],
    pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(MATERIAL_DOCS_ROUTES);
