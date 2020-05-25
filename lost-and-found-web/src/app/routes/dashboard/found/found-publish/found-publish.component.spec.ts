import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPublishComponent } from './found-publish.component';

describe('FoundPublishComponent', () => {
  let component: FoundPublishComponent;
  let fixture: ComponentFixture<FoundPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
