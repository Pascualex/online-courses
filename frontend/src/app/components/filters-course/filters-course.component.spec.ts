import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersCourseComponent } from './filters-course.component';

describe('FiltersCourseComponent', () => {
  let component: FiltersCourseComponent;
  let fixture: ComponentFixture<FiltersCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
