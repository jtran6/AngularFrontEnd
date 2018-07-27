import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInvoiceApprovalsComponent } from './transactions-invoice-approvals.component';

describe('TransactionsInvoiceApprovalsComponent', () => {
  let component: TransactionsInvoiceApprovalsComponent;
  let fixture: ComponentFixture<TransactionsInvoiceApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsInvoiceApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInvoiceApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
