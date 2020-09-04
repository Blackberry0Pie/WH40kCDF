import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenderComponent } from './defender.component';

describe('DefenderComponent', () => {
  let component: DefenderComponent;
  let fixture: ComponentFixture<DefenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
