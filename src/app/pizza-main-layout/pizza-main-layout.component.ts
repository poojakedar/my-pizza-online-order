import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Pizza } from "../pizza";
import { PizzaService } from "../pizza.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-pizza-main-layout",
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  templateUrl: "./pizza-main-layout.component.html",
  styleUrl: "./pizza-main-layout.component.css",
})
export class PizzaMainLayoutComponent {
  public readonly pizzaService = inject(PizzaService);
  public readonly cartService = inject(CartService);
  private readonly snackBar = inject(MatSnackBar);

  public readonly bases = ["Thin Crust", "Regular base", "Flat bread", "Multigrain"];
  public readonly types = ["Cheese burst", "Cheese topping", "No cheese"];

  public addToCart(pizza: Pizza): void {
    this.cartService.addToCart(pizza);
    this.snackBar.open(`✓ ${pizza.name} added to cart`, "View Cart", {
      duration: 3000,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ["snackbar-success"],
    });
  }

  public setToggle(val: string): void {
    const current = this.pizzaService.filter().toggle;
    this.pizzaService.updateFilter({ toggle: current === val ? "" : val });
  }

  public updateMaxPrice(val: number): void {
    this.pizzaService.updateFilter({ maxPrice: val });
  }

  public updateBase(val: string): void {
    this.pizzaService.updateFilter({ base: val });
  }

  public updateType(val: string): void {
    this.pizzaService.updateFilter({ type: val });
  }
}
