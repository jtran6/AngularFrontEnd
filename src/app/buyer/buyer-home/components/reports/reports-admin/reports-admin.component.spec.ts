import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAdminComponent } from './reports-admin.component';

describe('ReportsAdminComponent', () => {
  let component: ReportsAdminComponent;
  let fixture: ComponentFixture<ReportsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
