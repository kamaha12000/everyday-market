import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../model';

@Injectable({
  providedIn: CoreModule
})
export class ProductsService {

  constructor(private readonly http: HttpClient) { }

  loadProducts(categoryName: string): Promise<Product[]> {
    return this.http.get(`https://localhost:3001/api/products/searchcategory/${categoryName}`)
      .toPromise()
      .then(result => result as Product[]);
  }
}
