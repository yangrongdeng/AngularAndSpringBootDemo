import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLostComponent } from './check-lost.component';

describe('CheckLostComponent', () => {
  let component: CheckLostComponent;
  let fixture: ComponentFixture<CheckLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
