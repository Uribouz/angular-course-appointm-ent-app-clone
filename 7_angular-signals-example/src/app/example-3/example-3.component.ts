import { CommonModule } from '@angular/common';
import { computed, signal } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-3.component.html',
  styleUrl: './example-3.component.css'
})
export class Example3Component {
  products = signal([
    {id: 1, name: 'Milk', price: 1.45},
    {id: 2, name: 'Bread', price: 3.90},
    {id: 3, name: 'Tomatoes', price: 2.20},
  ])

  filterName = signal('');

  filterProducts = computed(() => {
    console.log(this.filterName().toLowerCase())
    return this.products().filter(
        product => product.name
        .toLowerCase()
        .includes(this.filterName().toLowerCase())
      )
  })

  changeFilter(event: Event): void {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}
