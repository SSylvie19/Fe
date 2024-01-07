import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainDropComponent } from './rain-drop.component';

describe('RainDropComponent', () => {
  let component: RainDropComponent;
  let fixture: ComponentFixture<RainDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainDropComponent]
    });
    fixture = TestBed.createComponent(RainDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
