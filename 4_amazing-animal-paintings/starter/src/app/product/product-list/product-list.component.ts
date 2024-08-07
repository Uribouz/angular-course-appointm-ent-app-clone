import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = []
  fitleredProducts:  Product[] = []
  sortOrder: string = ""

  constructor(private productService: ProductService, 
    private cartService: CartService,
    private snackbar: MatSnackBar
  ){};
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.fitleredProducts = data;
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open("Product added to cart!", "", {
          duration: 2000,
          horizontalPosition : 'right',
          verticalPosition: 'top'
        })
      }
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.fitleredProducts = this.products.filter(
      product => product.name.toLowerCase().includes(searchTerm)
    )
    this.sortProduct(this.sortOrder);
  }

  sortProduct(sortValue: string) {
    this.sortOrder = sortValue;
    console.log('sortProduct', sortValue)
    if (this.sortOrder === "priceLowHigh") {
      this.fitleredProducts.sort((a,b) => a.price - b.price)
    } else if (this.sortOrder === "priceHighLow") {
      this.fitleredProducts.sort((a,b) => b.price - a.price)
    }
  }
}
