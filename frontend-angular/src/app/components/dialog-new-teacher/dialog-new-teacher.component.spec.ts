import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewTeacherComponent } from './dialog-new-teacher.component';

describe('DialogNewTeacherComponent', () => {
  let component: DialogNewTeacherComponent;
  let fixture: ComponentFixture<DialogNewTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
