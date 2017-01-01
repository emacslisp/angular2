import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [CoursesComponent],

})

export class AppComponent  { name = 'Test'; }
