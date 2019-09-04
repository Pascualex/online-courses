import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherView } from './teachers.view';

describe('TeacherView', () => {
  let component: TeacherView;
  let fixture: ComponentFixture<TeacherView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
