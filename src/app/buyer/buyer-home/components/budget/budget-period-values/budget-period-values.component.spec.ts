import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPeriodValuesComponent } from './budget-period-values.component';

describe('BudgetPeriodValuesComponent', () => {
  let component: BudgetPeriodValuesComponent;
  let fixture: ComponentFixture<BudgetPeriodValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPeriodValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPeriodValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
