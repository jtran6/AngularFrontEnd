import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetGroupsComponent } from './budget-groups.component';

describe('BudgetGroupsComponent', () => {
  let component: BudgetGroupsComponent;
  let fixture: ComponentFixture<BudgetGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
