import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersTeacherComponent } from './filters-teacher.component';

describe('FiltersTeacherComponent', () => {
  let component: FiltersTeacherComponent;
  let fixture: ComponentFixture<FiltersTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
