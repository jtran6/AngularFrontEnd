import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManagementItemsComponent } from './vendor-management-items.component';

describe('VendorManagementItemsComponent', () => {
  let component: VendorManagementItemsComponent;
  let fixture: ComponentFixture<VendorManagementItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManagementItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManagementItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
