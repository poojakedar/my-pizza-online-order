import { Injectable, signal, computed } from "@angular/core";
import { Pizza, PizzaFilter } from "./pizza";

@Injectable({ providedIn: "root" })
export class PizzaService {
  private readonly allPizzas: Pizza[] = [
    {
      id: 11,
      name: "Margherita",
      init: "v",
      pizza: "Veg",
      image: "assets/1.png",
      price: 200,
      base: "Thin Crust",
      type: "Cheese burst",
    },
    {
      id: 12,
      name: "Farmhouse",
      init: "v",
      pizza: "Veg",
      image: "assets/2.png",
      price: 300,
      base: "Multigrain",
      type: "Cheese burst",
    },
    {
      id: 13,
      name: "Pepperoni",
      init: "n",
      pizza: "Non Veg",
      image: "assets/3.png",
      price: 400,
      base: "Regular base",
      type: "Cheese burst",
    },
    {
      id: 14,
      name: "Veggie Delight",
      init: "v",
      pizza: "Veg",
      image: "assets/4.png",
      price: 299,
      base: "Flat bread",
      type: "Cheese burst",
    },
    {
      id: 15,
      name: "Paneer Tikka",
      init: "v",
      pizza: "Veg",
      image: "assets/5.png",
      price: 350,
      base: "Thin Crust",
      type: "Cheese burst",
    },
    {
      id: 16,
      name: "BBQ Chicken",
      init: "n",
      pizza: "Non Veg",
      image: "assets/6.png",
      price: 450,
      base: "Flat bread",
      type: "Cheese burst",
    },
    {
      id: 17,
      name: "Garden Fresh",
      init: "v",
      pizza: "Veg",
      image: "assets/7.png",
      price: 250,
      base: "Thin Crust",
      type: "No cheese",
    },
    {
      id: 18,
      name: "Chicken Supreme",
      init: "n",
      pizza: "Non Veg",
      image: "assets/8.png",
      price: 499,
      base: "Multigrain",
      type: "Cheese burst",
    },
    {
      id: 19,
      name: "Spicy Paneer",
      init: "v",
      pizza: "Veg",
      image: "assets/1.png",
      price: 320,
      base: "Thin Crust",
      type: "Cheese burst",
    },
    {
      id: 20,
      name: "Mediterranean",
      init: "v",
      pizza: "Veg",
      image: "assets/2.png",
      price: 380,
      base: "Flat bread",
      type: "Cheese topping",
    },
    {
      id: 21,
      name: "Zesty Chicken",
      init: "n",
      pizza: "Non Veg",
      image: "assets/3.png",
      price: 420,
      base: "Regular base",
      type: "Cheese burst",
    },
    {
      id: 22,
      name: "Cheesy Corn",
      init: "v",
      pizza: "Veg",
      image: "assets/4.png",
      price: 270,
      base: "Multigrain",
      type: "Cheese burst",
    },
  ];

  // Reactive filter state using signals
  public readonly filter = signal<PizzaFilter>({
    toggle: "",
    base: "",
    type: "",
    maxPrice: 600,
  });

  // Derived filtered list
  public readonly pizzas = computed(() => {
    const f = this.filter();
    return this.allPizzas.filter((p) => {
      if (f.toggle && p.init !== f.toggle) return false;
      if (f.base && p.base !== f.base) return false;
      if (f.type && p.type !== f.type) return false;
      if (p.price > f.maxPrice) return false;
      return true;
    });
  });

  public getPizza(id: number): Pizza | undefined {
    return this.allPizzas.find((p) => p.id === id);
  }

  public updateFilter(partial: Partial<PizzaFilter>): void {
    this.filter.update((f) => ({ ...f, ...partial }));
  }

  public resetFilter(): void {
    this.filter.set({ toggle: "", base: "", type: "", maxPrice: 600 });
  }
}
