import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOrderEntryComponent } from './order-order-entry.component';

describe('OrderOrderEntryComponent', () => {
  let component: OrderOrderEntryComponent;
  let fixture: ComponentFixture<OrderOrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOrderEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
