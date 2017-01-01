import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <courses></courses>`,
  directives: [CoursesComponent],

})

export class AppComponent  { name = 'Test'; }
