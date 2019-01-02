import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [CategoryMenuItemComponent, CategoryMenuComponent, ProductsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class MarketModule { }
