import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpperCasePipe } from '@angular/common';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-main-layout',
  standalone: true,
  imports: [
    RouterLink, FormsModule,
    MatSidenavModule, MatButtonModule, MatButtonToggleModule,
    MatSelectModule, MatSliderModule, MatCardModule, MatChipsModule,
    MatIconModule, MatBadgeModule, MatDividerModule, MatFormFieldModule
  ],
  templateUrl: './pizza-main-layout.component.html',
  styleUrl: './pizza-main-layout.component.css'
})
export class PizzaMainLayoutComponent {
  readonly pizzaService = inject(PizzaService);

  readonly bases = ['Thin Crust', 'Regular base', 'Flat bread', 'Multigrain'];
  readonly types = ['Cheese burst', 'Cheese topping', 'No cheese'];

  setToggle(val: string): void {
    const current = this.pizzaService.filter().toggle;
    this.pizzaService.updateFilter({ toggle: current === val ? '' : val });
  }

  updateMaxPrice(val: number): void {
    this.pizzaService.updateFilter({ maxPrice: val });
  }

  updateBase(val: string): void {
    this.pizzaService.updateFilter({ base: val });
  }

  updateType(val: string): void {
    this.pizzaService.updateFilter({ type: val });
  }
}

