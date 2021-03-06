import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product'


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    // Properties
    title: string = 'Product List';
    products: IProduct[];
    showImage = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    filteredProducts: IProduct[];
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private productService: ProductService) {
        
     }

    // public methods
    toggleShowImage(): void {
        this.showImage = !this.showImage;
    }


    // private methods
    private performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    private getProducts(): void {
        this.productService.getProducts().subscribe(response => {
            this.products = response;
            this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);
    }

    onNotify(message: string): void {
        this.title = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.getProducts();
    }
}
