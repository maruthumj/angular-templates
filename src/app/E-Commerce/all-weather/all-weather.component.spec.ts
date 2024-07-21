import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWeatherComponent } from './all-weather.component';

describe('AllWeatherComponent', () => {
  let component: AllWeatherComponent;
  let fixture: ComponentFixture<AllWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
