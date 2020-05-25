import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLostFoundComponent } from './my-lost-found.component';

describe('MyLostFoundComponent', () => {
  let component: MyLostFoundComponent;
  let fixture: ComponentFixture<MyLostFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLostFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLostFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
