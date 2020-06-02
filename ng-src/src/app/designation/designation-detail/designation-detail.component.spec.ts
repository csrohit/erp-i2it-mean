import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationDetailComponent } from './designation-detail.component';

describe('DesignationDetailComponent', () => {
  let component: DesignationDetailComponent;
  let fixture: ComponentFixture<DesignationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
