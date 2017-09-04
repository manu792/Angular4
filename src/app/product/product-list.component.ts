import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { IProduct } from '../models/product'


@Component({
  selector: 'pm-products',
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

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private productListService: ProductListService) {
        
     }

    // public methods
    toggleShowImage(): void {
        this.showImage = !this.showImage;
    }


    // private methods
    private performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    private getProducts(): void {
        this.productListService.getProducts().subscribe(response => {
            this.products = response;
            this.filteredProducts = this.products;
        });
    }

    ngOnInit(): void {
        this.getProducts();
    }
}
