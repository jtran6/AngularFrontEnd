import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOrderApprovalsComponent } from './transactions-order-approvals.component';

describe('TransactionsOrderApprovalsComponent', () => {
  let component: TransactionsOrderApprovalsComponent;
  let fixture: ComponentFixture<TransactionsOrderApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOrderApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOrderApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
