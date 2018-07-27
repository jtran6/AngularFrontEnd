import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShoppingCartsComponent } from './order-shopping-carts.component';

describe('OrderShoppingCartsComponent', () => {
  let component: OrderShoppingCartsComponent;
  let fixture: ComponentFixture<OrderShoppingCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderShoppingCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderShoppingCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
