import { Component, inject, input, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatChipsModule, MatDividerModule],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.css'
})
export class PizzaDetailComponent {
  readonly id = input.required<string>();

  private readonly pizzaService = inject(PizzaService);
  private readonly router = inject(Router);

  readonly pizza = computed(() => this.pizzaService.getPizza(+this.id()));

  goBack(): void {
    this.router.navigate(['/menu']);
  }
}

