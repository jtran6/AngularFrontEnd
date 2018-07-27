import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManagementOrderGuidesComponent } from './vendor-management-order-guides.component';

describe('VendorManagementOrderGuidesComponent', () => {
  let component: VendorManagementOrderGuidesComponent;
  let fixture: ComponentFixture<VendorManagementOrderGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManagementOrderGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManagementOrderGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
