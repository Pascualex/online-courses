import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailCourseComponent } from './card-detail-course.component';

describe('CardDetailCourseComponent', () => {
  let component: CardDetailCourseComponent;
  let fixture: ComponentFixture<CardDetailCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
