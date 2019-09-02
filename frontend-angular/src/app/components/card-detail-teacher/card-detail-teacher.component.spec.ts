import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailTeacher } from './card-detail-teacher.component';

describe('CardDetailTeacher', () => {
  let component: CardDetailTeacher;
  let fixture: ComponentFixture<CardDetailTeacher>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailTeacher ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailTeacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
