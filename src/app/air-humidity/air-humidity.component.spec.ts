import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirHumidityComponent } from './air-humidity.component';

describe('AirHumidityComponent', () => {
  let component: AirHumidityComponent;
  let fixture: ComponentFixture<AirHumidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirHumidityComponent]
    });
    fixture = TestBed.createComponent(AirHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
