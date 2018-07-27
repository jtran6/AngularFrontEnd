import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManagementItemPricesComponent } from './vendor-management-item-prices.component';

describe('VendorManagementItemPricesComponent', () => {
  let component: VendorManagementItemPricesComponent;
  let fixture: ComponentFixture<VendorManagementItemPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManagementItemPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManagementItemPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
