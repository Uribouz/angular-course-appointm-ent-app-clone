import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';
  theme = signal("dark")
  label  = this.theme();

  price = 19;
  quantity = signal(10)
  totalPrice = computed(() => this.price * this.quantity());

  constructor() {
    effect(() => {
      this.label = this.theme();
    })

  }
  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
}
