import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPanelComponent } from './c-panel.component';

describe('CPanelComponent', () => {
  let component: CPanelComponent;
  let fixture: ComponentFixture<CPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
