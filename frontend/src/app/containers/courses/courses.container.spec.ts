import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesContainer } from './courses.container';

describe('CoursesContainer', () => {
  let component: CoursesContainer;
  let fixture: ComponentFixture<CoursesContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
