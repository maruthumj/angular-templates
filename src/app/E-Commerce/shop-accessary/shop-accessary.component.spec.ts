import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccessaryComponent } from './shop-accessary.component';

describe('ShopAccessaryComponent', () => {
  let component: ShopAccessaryComponent;
  let fixture: ComponentFixture<ShopAccessaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopAccessaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopAccessaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
