import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewCourseComponent } from './dialog-new-course.component';

describe('DialogNewCourseComponent', () => {
  let component: DialogNewCourseComponent;
  let fixture: ComponentFixture<DialogNewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
