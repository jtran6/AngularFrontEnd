import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBudgetsComponent } from './budget-budgets.component';

describe('BudgetBudgetsComponent', () => {
  let component: BudgetBudgetsComponent;
  let fixture: ComponentFixture<BudgetBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
