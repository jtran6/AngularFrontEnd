import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsItemsComponent } from './reports-items.component';

describe('ReportsItemsComponent', () => {
  let component: ReportsItemsComponent;
  let fixture: ComponentFixture<ReportsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
