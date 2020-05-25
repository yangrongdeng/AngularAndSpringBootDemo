import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosePublishComponent } from './lose-publish.component';

describe('LosePublishComponent', () => {
  let component: LosePublishComponent;
  let fixture: ComponentFixture<LosePublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosePublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
