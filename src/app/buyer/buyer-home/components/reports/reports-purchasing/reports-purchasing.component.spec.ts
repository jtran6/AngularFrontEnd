import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPurchasingComponent } from './reports-purchasing.component';

describe('ReportsPurchasingComponent', () => {
  let component: ReportsPurchasingComponent;
  let fixture: ComponentFixture<ReportsPurchasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPurchasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
