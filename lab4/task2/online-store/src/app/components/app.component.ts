import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../services/product.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }

  removeProduct(productId: number) {
  this.productService.deleteProduct(productId);

    if (this.selectedCategory) {
      this.products = this.productService.getProductsByCategory(
        this.selectedCategory.id
      );
    }
  }
}