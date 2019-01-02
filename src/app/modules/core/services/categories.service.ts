import { Injectable } from '@angular/core';
import { Category } from '../../../model';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {
  constructor(private readonly http: HttpClient) { }
  loadCategories(): Promise<Category[]> {
    return this.http
      .get('https://localhost:3001/api/products/categories')
      .toPromise()
      .then(result => result as Category[]);
  }
}
