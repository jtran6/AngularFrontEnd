import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetImportsComponent } from './budget-imports.component';

describe('BudgetImportsComponent', () => {
  let component: BudgetImportsComponent;
  let fixture: ComponentFixture<BudgetImportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetImportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
