import { effect, signal, computed } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.css'
})
export class Example1Component {
  theme = signal("dark")
  label  = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
    })

  }
  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }
}
