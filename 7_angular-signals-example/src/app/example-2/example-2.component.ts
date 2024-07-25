import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.css'
})
export class Example2Component {
  price = 19;
  quantity = signal(10)
  totalPrice = computed(() => this.price * this.quantity());

  constructor() {
  }

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
}
