import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFoundComponent } from './check-found.component';

describe('CheckFoundComponent', () => {
  let component: CheckFoundComponent;
  let fixture: ComponentFixture<CheckFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
