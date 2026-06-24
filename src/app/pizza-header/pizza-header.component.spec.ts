import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaHeaderComponent } from './pizza-header.component';
import { provideRouter } from '@angular/router';

describe('PizzaHeaderComponent', () => {
  let component: PizzaHeaderComponent;
  let fixture: ComponentFixture<PizzaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaHeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
