import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationRegisterComponent } from './designation-register.component';

describe('DesignationRegisterComponent', () => {
  let component: DesignationRegisterComponent;
  let fixture: ComponentFixture<DesignationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
