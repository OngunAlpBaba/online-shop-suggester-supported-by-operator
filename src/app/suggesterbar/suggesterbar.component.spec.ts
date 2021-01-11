import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesterbarComponent } from './suggesterbar.component';

describe('SuggesterbarComponent', () => {
  let component: SuggesterbarComponent;
  let fixture: ComponentFixture<SuggesterbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggesterbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggesterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
