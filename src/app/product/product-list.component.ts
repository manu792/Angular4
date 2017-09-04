import { Component } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Product } from '../models/products.model'


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  //styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    // Properties
    title: string = 'Product List';
    products: Product[];
    showImage = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

    constructor(private productListService: ProductListService){
        this.getProducts();
    }

    // public methods
    public toggleShowImage() {
        this.showImage = !this.showImage;
    }


    // private methods
    private getProducts() {
        this.productListService.getProducts().subscribe(response => {
            this.products = response;
        });
    }
}
