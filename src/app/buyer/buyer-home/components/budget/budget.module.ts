import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetImportsComponent } from './budget-imports/budget-imports.component';
import { BudgetPeriodValuesComponent } from './budget-period-values/budget-period-values.component';
import { BudgetPeriodsComponent } from './budget-periods/budget-periods.component';
import { BudgetGroupsComponent } from './budget-groups/budget-groups.component';
import { BudgetBudgetsComponent } from './budget-budgets/budget-budgets.component';
import { BudgetComponent } from './budget.component';

const COMPONENTS = [
  BudgetComponent,
  BudgetImportsComponent,
  BudgetPeriodValuesComponent,
  BudgetPeriodsComponent,
  BudgetGroupsComponent,
  BudgetBudgetsComponent
];

const IMPORTS = [
  CommonModule
];

const EXPORTS = [
  ...IMPORTS,
  ...COMPONENTS
];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class BudgetModule { }
