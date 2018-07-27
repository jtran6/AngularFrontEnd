import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderQuickSearchComponent } from './order-quick-search.component';

describe('OrderQuickSearchComponent', () => {
  let component: OrderQuickSearchComponent;
  let fixture: ComponentFixture<OrderQuickSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderQuickSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderQuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
