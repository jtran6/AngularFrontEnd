import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsApprovalsComponent } from './reports-approvals.component';

describe('ReportsApprovalsComponent', () => {
  let component: ReportsApprovalsComponent;
  let fixture: ComponentFixture<ReportsApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
