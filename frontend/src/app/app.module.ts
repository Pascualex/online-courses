import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesContainer } from './containers/courses/courses.container';
import { CoursesView } from './views/courses/courses.view';
import { HeaderContainer } from './containers/header/header.container';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { TeacherView } from './views/teachers/teachers.view';
import { SectionTopComponent } from './components/section-top/section-top.component';
import { TeacherContainer } from './containers/teachers/teachers.container';
import { CardDetailTeacher } from './components/card-detail-teacher/card-detail-teacher.component';
import { CardDetailCourseComponent } from './components/card-detail-course/card-detail-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule, MatDialogModule, MatInputModule, MatSelectModule, MatIconModule,
         MatAutocompleteModule, MatSlideToggleModule } from '@angular/material';
import { DialogNewTeacherComponent } from './components/dialog-new-teacher/dialog-new-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogNewCourseComponent } from './components/dialog-new-course/dialog-new-course.component';
import { FiltersCourseComponent } from './components/filters-course/filters-course.component';
import { FiltersTeacherComponent } from './components/filters-teacher/filters-teacher.component';
import { HomeView } from './views/home/home.view';
import { HomeContainer } from './containers/home/home.container';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardGridComponent,
    CoursesContainer,
    CoursesView,
    HeaderContainer,
    NavigationBarComponent,
    TeacherView,
    SectionTopComponent,
    TeacherContainer,
    CardDetailTeacher,
    CardDetailCourseComponent,
    DialogNewTeacherComponent,
    DialogNewCourseComponent,
    FiltersCourseComponent,
    FiltersTeacherComponent,
    HomeView,
    HomeContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    DialogNewTeacherComponent,
    DialogNewCourseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
