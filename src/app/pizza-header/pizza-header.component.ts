import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CartService } from "../cart.service";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-pizza-header",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  templateUrl: "./pizza-header.component.html",
  styleUrl: "./pizza-header.component.css",
})
export class PizzaHeaderComponent {
  public readonly cartService = inject(CartService);
  public readonly themeService = inject(ThemeService);
}
