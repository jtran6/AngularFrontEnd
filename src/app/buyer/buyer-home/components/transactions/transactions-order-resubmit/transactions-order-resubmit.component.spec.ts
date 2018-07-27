import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOrderResubmitComponent } from './transactions-order-resubmit.component';

describe('TransactionsOrderResubmitComponent', () => {
  let component: TransactionsOrderResubmitComponent;
  let fixture: ComponentFixture<TransactionsOrderResubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOrderResubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOrderResubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
