import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySingleEditComponent } from './country-single-edit.component';

describe('CountrySingleEditComponent', () => {
  let component: CountrySingleEditComponent;
  let fixture: ComponentFixture<CountrySingleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySingleEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrySingleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
