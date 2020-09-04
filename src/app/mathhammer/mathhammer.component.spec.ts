import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathhammerComponent } from './mathhammer.component';

describe('MathhammerComponent', () => {
  let component: MathhammerComponent;
  let fixture: ComponentFixture<MathhammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathhammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathhammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
