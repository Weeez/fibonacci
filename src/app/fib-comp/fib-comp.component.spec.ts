import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibCompComponent } from './fib-comp.component';

describe('FibCompComponent', () => {
  let component: FibCompComponent;
  let fixture: ComponentFixture<FibCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
