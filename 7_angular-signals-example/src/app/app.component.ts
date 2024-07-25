import { Component, signal } from '@angular/core';
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

  ngOnInit() {

    // this.theme.set('dark');
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
    document.body.className = this.theme();
  }
}
