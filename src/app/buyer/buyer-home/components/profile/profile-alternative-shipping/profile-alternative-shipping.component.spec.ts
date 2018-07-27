import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAlternativeShippingComponent } from './profile-alternative-shipping.component';

describe('ProfileAlternativeShippingComponent', () => {
  let component: ProfileAlternativeShippingComponent;
  let fixture: ComponentFixture<ProfileAlternativeShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAlternativeShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAlternativeShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
