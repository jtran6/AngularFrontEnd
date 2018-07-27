import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVendorDirectComponent } from './order-vendor-direct.component';

describe('OrderVendorDirectComponent', () => {
  let component: OrderVendorDirectComponent;
  let fixture: ComponentFixture<OrderVendorDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderVendorDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderVendorDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
