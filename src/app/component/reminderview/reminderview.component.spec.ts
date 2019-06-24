import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderviewComponent } from './reminderview.component';

describe('ReminderviewComponent', () => {
  let component: ReminderviewComponent;
  let fixture: ComponentFixture<ReminderviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
