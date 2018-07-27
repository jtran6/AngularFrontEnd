import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOfflineEntriesComponent } from './transactions-offline-entries.component';

describe('TransactionsOfflineEntriesComponent', () => {
  let component: TransactionsOfflineEntriesComponent;
  let fixture: ComponentFixture<TransactionsOfflineEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOfflineEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOfflineEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
