import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaDetailComponent } from './pizza-detail.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('PizzaDetailComponent', () => {
  let component: PizzaDetailComponent;
  let fixture: ComponentFixture<PizzaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimationsAsync()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
