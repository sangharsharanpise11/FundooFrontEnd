import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiconsComponent } from './appicons.component';

describe('AppiconsComponent', () => {
  let component: AppiconsComponent;
  let fixture: ComponentFixture<AppiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
