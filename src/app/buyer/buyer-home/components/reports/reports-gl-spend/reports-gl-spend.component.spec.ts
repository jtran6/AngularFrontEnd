import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGlSpendComponent } from './reports-gl-spend.component';

describe('ReportsGlSpendComponent', () => {
  let component: ReportsGlSpendComponent;
  let fixture: ComponentFixture<ReportsGlSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsGlSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGlSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
