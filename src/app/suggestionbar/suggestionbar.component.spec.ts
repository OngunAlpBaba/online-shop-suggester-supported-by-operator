import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionbarComponent } from './suggestionbar.component';

describe('SuggestionbarComponent', () => {
  let component: SuggestionbarComponent;
  let fixture: ComponentFixture<SuggestionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
