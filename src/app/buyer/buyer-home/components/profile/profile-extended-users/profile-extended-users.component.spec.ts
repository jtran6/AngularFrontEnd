import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExtendedUsersComponent } from './profile-extended-users.component';

describe('ProfileExtendedUsersComponent', () => {
  let component: ProfileExtendedUsersComponent;
  let fixture: ComponentFixture<ProfileExtendedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExtendedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExtendedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
