import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBrowseComponent } from './order-browse.component';

describe('OrderBrowseComponent', () => {
  let component: OrderBrowseComponent;
  let fixture: ComponentFixture<OrderBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
