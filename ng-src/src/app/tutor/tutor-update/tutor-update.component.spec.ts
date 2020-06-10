import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorUpdateComponent } from './tutor-update.component';

describe('TutorUpdateComponent', () => {
  let component: TutorUpdateComponent;
  let fixture: ComponentFixture<TutorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
