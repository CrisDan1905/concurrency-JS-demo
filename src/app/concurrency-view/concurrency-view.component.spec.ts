import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyViewComponent } from './concurrency-view.component';

describe('ConcurrencyViewComponent', () => {
  let component: ConcurrencyViewComponent;
  let fixture: ComponentFixture<ConcurrencyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcurrencyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurrencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
