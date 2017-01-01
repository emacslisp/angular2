import {Component} from '@angular/core';
import {CourseService} from './courses.service'

@Component({
selector: 'courses',
template: `<h2>Courses</h2>
<p> {{title}} </p>
<ul>
    <li *ngFor="let course of courses">
        {{course}}
    </li>
</ul>

<button (click)="toggleHobbies()">show Hobbies</button>

<div *ngIf="showHobbies">
   <h3>example </h3>
   <ul>
       <li *ngFor="let course of courses">
        {{course}}
       </li>
   </ul>
</div>

`,
  providers: [CourseService]
})

export class CoursesComponent{
        title = "Courses Component";
        courses;
        showHobbies;

        constructor(courseService : CourseService){
                this.courses = courseService.getCourses();
                this.showHobbies = true;                
        }

        toggleHobbies(){
        console.trace();
                this.showHobbies = !this.showHobbies;
        }
}