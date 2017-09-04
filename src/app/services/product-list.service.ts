import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/products.model";

@Injectable()
export class ProductListService {
    constructor(private http: Http){ }

    public getProducts(): Observable<Product[]> {
        return this.http.get('../../api/products/products.json').map(response => response.json());
    }
}
