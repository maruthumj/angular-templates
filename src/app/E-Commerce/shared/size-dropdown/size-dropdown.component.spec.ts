import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDropdownComponent } from './size-dropdown.component';

describe('SizeDropdownComponent', () => {
  let component: SizeDropdownComponent;
  let fixture: ComponentFixture<SizeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizeDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SizeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
