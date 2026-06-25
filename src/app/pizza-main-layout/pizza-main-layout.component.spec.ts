import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PizzaMainLayoutComponent } from "./pizza-main-layout.component";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

describe("PizzaMainLayoutComponent", () => {
  let component: PizzaMainLayoutComponent;
  let fixture: ComponentFixture<PizzaMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaMainLayoutComponent],
      providers: [provideRouter([]), provideHttpClient(), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
