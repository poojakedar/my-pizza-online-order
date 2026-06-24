import { Injectable, signal, computed } from '@angular/core';
import { Pizza } from './pizza';

export interface CartItem extends Pizza {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items = signal<CartItem[]>([]);

  readonly cart = computed(() => this.items());
  readonly totalItems = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));
  readonly totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addToCart(pizza: Pizza, quantity: number = 1): void {
    this.items.update(items => {
      const existing = items.find(item => item.id === pizza.id);
      if (existing) {
        existing.quantity += quantity;
        return [...items];
      }
      return [...items, { ...pizza, quantity }];
    });
  }

  removeFromCart(pizzaId: number): void {
    this.items.update(items => items.filter(item => item.id !== pizzaId));
  }

  updateQuantity(pizzaId: number, quantity: number): void {
    this.items.update(items => {
      const item = items.find(i => i.id === pizzaId);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      return items;
    });
  }

  clearCart(): void {
    this.items.set([]);
  }
}
