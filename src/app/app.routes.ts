import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/menu", pathMatch: "full" },
  {
    path: "menu",
    loadComponent: () =>
      import("./pizza-main-layout/pizza-main-layout.component").then((m) => m.PizzaMainLayoutComponent),
  },
  {
    path: "detail/:id",
    loadComponent: () => import("./pizza-detail/pizza-detail.component").then((m) => m.PizzaDetailComponent),
  },
  {
    path: "cart",
    loadComponent: () => import("./cart/cart.component").then((m) => m.CartComponent),
  },
];
