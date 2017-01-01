import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { CoursesComponent }  from './courses.component';
import { AboutComponent }  from './about.component';

//@example: ng2 - routing - import routing and 'imports' and 'declarations' for new component
import {routing} from './app.routing';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, CoursesComponent,AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
