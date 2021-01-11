import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailbarComponent } from './productdetailbar.component';

describe('ProductdetailbarComponent', () => {
  let component: ProductdetailbarComponent;
  let fixture: ComponentFixture<ProductdetailbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
