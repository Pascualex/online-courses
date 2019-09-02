import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContainer } from './teachers.container';

describe('TeacherContainer', () => {
  let component: TeacherContainer;
  let fixture: ComponentFixture<TeacherContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
