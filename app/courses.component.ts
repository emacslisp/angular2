import {Component} from '@angular/core';
import {CourseService} from './courses.service'
import {PostService} from './post.service'

@Component({
moduleId: module.id;
selector: 'courses',
templateUrl: 'courses.html',
  providers: [CourseService, PostService]
})

export class CoursesComponent{
        title = "Courses Component";
        courses;
        showHobbies;
        name;
        posts: Post[];

        constructor(courseService : CourseService, postService: PostService){
                this.courses = courseService.getCourses();
                this.showHobbies = true;

                postService.getPosts().subscribe(posts => {
                    this.posts = posts;
                });
                
        }

        toggleHobbies(){
        console.trace();
                this.showHobbies = !this.showHobbies;
        }
}


interface Post {
    id: number;
    title: string;
    body: string;
}