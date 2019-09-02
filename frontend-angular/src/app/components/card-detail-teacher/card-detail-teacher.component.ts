import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';

@Component({
  selector: 'app-card-detail-teacher',
  templateUrl: './card-detail-teacher.component.html',
  styleUrls: ['./card-detail-teacher.component.scss']
})
export class CardDetailTeacher implements OnInit {

  @Input()
  public teacher: Teacher;

  constructor() { }

  ngOnInit() { }
}
