import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-card-detail-course',
  templateUrl: './card-detail-course.component.html',
  styleUrls: ['./card-detail-course.component.scss']
})
export class CardDetailCourseComponent implements OnInit {

  @Input()
  public course: Course;

  constructor() { }

  ngOnInit() { }
}
