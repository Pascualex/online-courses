import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesView } from './courses.view';

describe('CoursesView', () => {
  let component: CoursesView;
  let fixture: ComponentFixture<CoursesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
