import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

@NgModule({
  declarations: [CategoryMenuItemComponent, CategoryMenuComponent],
  imports: [
    CommonModule
  ]
})
export class MarketModule { }
