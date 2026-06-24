import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  removeItem(pizzaId: number): void {
    this.cartService.removeFromCart(pizzaId);
  }

  updateQuantity(pizzaId: number, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(pizzaId, quantity);
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  continueShopping(): void {
    this.router.navigate(['/menu']);
  }

  checkout(): void {
    // Placeholder for checkout
    alert('Checkout functionality coming soon!');
  }
}
