import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOfflineInvoiceEntryComponent } from './transactions-offline-invoice-entry.component';

describe('TransactionsOfflineInvoiceEntryComponent', () => {
  let component: TransactionsOfflineInvoiceEntryComponent;
  let fixture: ComponentFixture<TransactionsOfflineInvoiceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOfflineInvoiceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOfflineInvoiceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
