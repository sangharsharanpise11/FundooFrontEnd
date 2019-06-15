import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabratorDialogComponent } from './collabrator-dialog.component';

describe('CollabratorDialogComponent', () => {
  let component: CollabratorDialogComponent;
  let fixture: ComponentFixture<CollabratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
