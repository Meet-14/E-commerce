import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCorouselComponent } from './main-corousel.component';

describe('MainCorouselComponent', () => {
  let component: MainCorouselComponent;
  let fixture: ComponentFixture<MainCorouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCorouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
