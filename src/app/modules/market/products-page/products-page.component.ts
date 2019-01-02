import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  categories: Category[] = [
    { name: 'Books' }, { name: 'Appliances' }, { name: 'Food' }
  ];
  selectedCategory: Category;
  constructor() { }

  ngOnInit() {
  }

  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    alert(category.name);
  }
}
