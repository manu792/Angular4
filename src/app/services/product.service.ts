import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IProduct } from "../models/product";

@Injectable()
export class ProductService {
    constructor(private http: Http){ }

    public getProducts(): Observable<IProduct[]> {
        return this.http.get('../../api/products/products.json').map(response => response.json());
    }
}
