import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityJobsComponent } from './security-jobs.component';

describe('SecurityJobsComponent', () => {
  let component: SecurityJobsComponent;
  let fixture: ComponentFixture<SecurityJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
