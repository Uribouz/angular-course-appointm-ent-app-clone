import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example1Component } from './example-1/example-1.component';
import { Example2Component } from './example-2/example-2.component';
import { Example3Component } from './example-3/example-3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Example1Component,Example2Component,Example3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';
}
