import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${product.id}`, product)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/products/${id}`)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  getTimelineProducts(): Observable<Product[]> {
    // Adjust the endpoint according to your API
    return this.http.get<Product[]>(`${environment.apiUrl}/timeline/products`)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
