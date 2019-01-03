import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../model';


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  @Input() categories: Category[];
  @Output() categoryChanged = new EventEmitter<Category>();
  selectedCategoryName: string;

  onCategorySelected(catname: string) {
    const cat = this.categories.find(c => c.name == catname);
    this.selectedCategoryName = cat.name;
    this.categoryChanged.emit(cat);
  }
}
