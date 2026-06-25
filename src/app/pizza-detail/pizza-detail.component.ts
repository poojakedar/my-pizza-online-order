import { Component, inject, input, computed } from "@angular/core";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { PizzaService } from "../pizza.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-pizza-detail",
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatChipsModule, MatDividerModule, MatSnackBarModule],
  templateUrl: "./pizza-detail.component.html",
  styleUrl: "./pizza-detail.component.css",
})
export class PizzaDetailComponent {
  public readonly id = input.required<string>();

  private readonly pizzaService = inject(PizzaService);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  public readonly pizza = computed(() => this.pizzaService.getPizza(+this.id()));

  public addToCart(): void {
    const p = this.pizza();
    if (p) {
      this.cartService.addToCart(p);
      this.snackBar.open(`✓ ${p.name} added to cart`, "View Cart", {
        duration: 3000,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ["snackbar-success"],
      });
    }
  }

  public goBack(): void {
    this.router.navigate(["/menu"]);
  }
}
