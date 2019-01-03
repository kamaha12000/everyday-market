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

  constructor(private readonly categoriesServices: CategoriesService, private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.categoriesServices.loadCategories()
      .then(r => this.categories = r);
  }

  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    this.productsService.loadProducts(category.name)
      .then(r => this.products = r);
  }
}
