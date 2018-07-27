import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsHoldComponent } from './transactions-hold.component';

describe('TransactionsHoldComponent', () => {
  let component: TransactionsHoldComponent;
  let fixture: ComponentFixture<TransactionsHoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsHoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
