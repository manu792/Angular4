import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ProductRoutes } from "./product.routes";

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
