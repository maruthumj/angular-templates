import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainPageComponent } from './rain-page.component';

describe('RainPageComponent', () => {
  let component: RainPageComponent;
  let fixture: ComponentFixture<RainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
