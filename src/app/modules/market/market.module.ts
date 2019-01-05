import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductViewPageComponent } from './product-view-page/product-view-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/new', component: ProductEditPageComponent },
  { path: 'products/:id', component: ProductViewPageComponent }
];


@NgModule({
  declarations: [
    CategoryMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductViewPageComponent,
    ProductEditPageComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class MarketModule { }
