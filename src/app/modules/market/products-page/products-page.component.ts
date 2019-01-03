import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../../../model';
import { CategoriesService } from '../../core/services/categories.service';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  products: Product[];
  isBusy = false;

  constructor(private readonly categoriesServices: CategoriesService, private readonly productsService: ProductsService) { }

  async ngOnInit() {
    this.isBusy = true;
    try {
      this.categories = await this.categoriesServices.loadCategories();
    } finally {
      this.isBusy = false;
    } 
  }

  async onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    this.isBusy = true;
    try {
      this.products = await this.productsService.loadProducts(category.name);
    } finally {
      this.isBusy = false;
    }
  }
}
