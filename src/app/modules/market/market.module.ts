import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductViewPageComponent } from './product-view-page/product-view-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class MarketModule { }
