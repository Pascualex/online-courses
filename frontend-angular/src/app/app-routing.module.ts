import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesView } from './views/courses/courses.view';
import { TeacherView } from './views/teachers/teachers.view';
import { HomeView } from './views/home/home.view';
const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'courses', component: CoursesView },
  { path: 'teachers', component: TeacherView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
