import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdatabarComponent } from './clientdatabar.component';

describe('ClientdatabarComponent', () => {
  let component: ClientdatabarComponent;
  let fixture: ComponentFixture<ClientdatabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdatabarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdatabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
