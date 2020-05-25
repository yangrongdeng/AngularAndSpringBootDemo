import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseListComponent } from './lose-list.component';

describe('LoseListComponent', () => {
  let component: LoseListComponent;
  let fixture: ComponentFixture<LoseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
