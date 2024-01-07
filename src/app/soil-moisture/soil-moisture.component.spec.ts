import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilMoistureComponent } from './soil-moisture.component';

describe('SoilMoistureComponent', () => {
  let component: SoilMoistureComponent;
  let fixture: ComponentFixture<SoilMoistureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoilMoistureComponent]
    });
    fixture = TestBed.createComponent(SoilMoistureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
