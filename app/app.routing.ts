import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesComponent} from './courses.component';
import {AboutComponent} from './about.component';

const appRoutes: Routes = [
        {
            path:'',
            component: CoursesComponent
        },
        {
            path:'about',
            component: AboutComponent
        }
];

//@example: ng2 - routing - typescript to add all url for all component
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
