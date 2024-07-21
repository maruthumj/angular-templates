import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByComponentComponent } from './sort-by-component.component';

describe('SortByComponentComponent', () => {
  let component: SortByComponentComponent;
  let fixture: ComponentFixture<SortByComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortByComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
