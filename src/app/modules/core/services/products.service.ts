import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { Product, NewProduct } from '../../../model';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: CoreModule
})
export class ProductsService {
  private readonly apiUri = environment.marketApiBaseUri;
  constructor(private readonly http: HttpClient) { }

  loadProducts(categoryName: string): Promise<Product[]> {
    return this.http.get(`${this.apiUri}products/searchcategory/${categoryName}`)
      .toPromise()
      .then(result => result as Product[]);
  }

  loadProduct(id: number) {
    return this.http.get(`${this.apiUri}products/${id}`)
      .toPromise()
      .then(r => r as Product);
  }


  addProduct(product: NewProduct) {
    return this.http.post(`${this.apiUri}products/slim`, product)
      .toPromise()
      .then(result => result as Product);
  }
}
