import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCarsComponent } from './products-cars.component';

describe('ProductsCarsComponent', () => {
  let component: ProductsCarsComponent;
  let fixture: ComponentFixture<ProductsCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
