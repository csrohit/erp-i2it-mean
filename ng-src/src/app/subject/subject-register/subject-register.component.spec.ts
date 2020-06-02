import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRegisterComponent } from './subject-register.component';

describe('SubjectRegisterComponent', () => {
  let component: SubjectRegisterComponent;
  let fixture: ComponentFixture<SubjectRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
