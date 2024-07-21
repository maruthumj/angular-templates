import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowPageComponent } from './snow-page.component';

describe('SnowPageComponent', () => {
  let component: SnowPageComponent;
  let fixture: ComponentFixture<SnowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
