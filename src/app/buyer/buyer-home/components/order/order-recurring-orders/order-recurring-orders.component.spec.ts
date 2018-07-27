import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRecurringOrdersComponent } from './order-recurring-orders.component';

describe('OrderRecurringOrdersComponent', () => {
  let component: OrderRecurringOrdersComponent;
  let fixture: ComponentFixture<OrderRecurringOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRecurringOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRecurringOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
