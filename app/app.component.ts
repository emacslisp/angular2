import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';


@Component({
  selector: 'my-app',
  template: `
<ul>
   <li><a routerLink="/">Home</a></li>
   <li><a routerLink="/about">About</a></li>
</ul>
<!--@example: ng2 - add router outlet to enable routing -->
  <router-outlet></router-outlet>`,
  directives: [CoursesComponent],

})

export class AppComponent  { name = 'Test'; }
