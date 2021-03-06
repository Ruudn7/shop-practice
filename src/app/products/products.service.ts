import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, Product } from 'src/app/types/account';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    url = 'http://localhost:3000/';

    constructor(
        private http: HttpClient
    ) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`
            ${this.url}products
        `);
    }

    getProduct(id: string | null): Observable<Product> {
        return this.http.get<Product>(`
            ${this.url}products/${id}
        `);
    }

    getFilters(): Observable<Filter[]> {
        return this.http.get<Filter[]>(`
            ${this.url}filters
        `);
    }

}
