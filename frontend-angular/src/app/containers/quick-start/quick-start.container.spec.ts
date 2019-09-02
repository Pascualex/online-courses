import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartContainer } from './quick-start.container';

describe('QuickStartContainer', () => {
  let component: QuickStartContainer;
  let fixture: ComponentFixture<QuickStartContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickStartContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickStartContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
