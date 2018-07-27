import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManagementVendorsComponent } from './vendor-management-vendors.component';

describe('VendorManagementVendorsComponent', () => {
  let component: VendorManagementVendorsComponent;
  let fixture: ComponentFixture<VendorManagementVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManagementVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManagementVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
