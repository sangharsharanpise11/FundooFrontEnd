import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelviewComponent } from './labelview.component';

describe('LabelviewComponent', () => {
  let component: LabelviewComponent;
  let fixture: ComponentFixture<LabelviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
