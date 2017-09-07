import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IProduct } from "../models/product";
import { HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/throw';

@Injectable()
export class ProductService {

    private url: string = '../../api/products/products.json';

    constructor(private http: HttpClient){ }

    public getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url)
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getProductById(productId: number): Observable<IProduct> {
        return this.http.get<IProduct[]>(this.url).map((data: IProduct[]) => {
            return data.find(x => x.productId === productId)
          });
    }

    private handleError(error: HttpErrorResponse) { 
        console.log(error.message);
        return Observable.throw(error.message);
    }
}
