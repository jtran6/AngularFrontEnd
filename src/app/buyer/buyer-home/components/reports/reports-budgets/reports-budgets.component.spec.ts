import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBudgetsComponent } from './reports-budgets.component';

describe('ReportsBudgetsComponent', () => {
  let component: ReportsBudgetsComponent;
  let fixture: ComponentFixture<ReportsBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
