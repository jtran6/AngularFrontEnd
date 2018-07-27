import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFileImportComponent } from './transactions-file-import.component';

describe('TransactionsFileImportComponent', () => {
  let component: TransactionsFileImportComponent;
  let fixture: ComponentFixture<TransactionsFileImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsFileImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFileImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
