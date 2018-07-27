import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInvoicesComponent } from './transactions-invoices.component';

describe('TransactionsInvoicesComponent', () => {
  let component: TransactionsInvoicesComponent;
  let fixture: ComponentFixture<TransactionsInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
