import { Component, OnInit } from '@angular/core';
import { IProduct } from "../models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product Detail';
  product: IProduct;
  
  private productId: number; 


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    console.log(route.snapshot.paramMap.get('id'));
    this.productId = +route.snapshot.paramMap.get('id');
   }

   onBack(): void {
     this.router.navigate(['/products']);
   }

   private getProductById(): void {
    this.productService.getProductById(this.productId).subscribe(response => {
      this.product = response;
    });
   }

  ngOnInit() {
    this.getProductById();
  }

}
