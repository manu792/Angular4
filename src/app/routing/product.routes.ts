import { Routes } from "@angular/router";
import { ProductListComponent } from "../product/product-list.component";
import { ProductDetailGuard } from "../product/guards/product-detail.guard";
import { ProductDetailComponent } from "../product/product-detail.component";

export const ProductRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { 
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
    }
];