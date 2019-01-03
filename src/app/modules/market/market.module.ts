import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CategoryMenuItemComponent, CategoryMenuComponent, ProductsPageComponent, ProductCardComponent, ProductListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class MarketModule { }
