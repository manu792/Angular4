import { NgModule } from '@angular/core';
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ConvertToSpaces } from "../pipes/convertToSpaces";
import { ProductDetailGuard } from "./guards/product-detail.guard";
import { ProductService } from "../services/product.service";
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from "../routing/product-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces,
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule { }
