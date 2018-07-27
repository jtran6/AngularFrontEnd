import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsRequisitionsComponent } from './transactions-requisitions.component';

describe('TransactionsRequisitionsComponent', () => {
  let component: TransactionsRequisitionsComponent;
  let fixture: ComponentFixture<TransactionsRequisitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsRequisitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
