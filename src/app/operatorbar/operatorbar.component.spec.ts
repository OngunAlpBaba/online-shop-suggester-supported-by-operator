import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorbarComponent } from './operatorbar.component';

describe('OperatorbarComponent', () => {
  let component: OperatorbarComponent;
  let fixture: ComponentFixture<OperatorbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
