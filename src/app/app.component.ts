import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PizzaHeaderComponent } from "./pizza-header/pizza-header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, PizzaHeaderComponent],
  template: `
    <app-pizza-header />
    <main class="min-h-screen bg-[#111118]">
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
