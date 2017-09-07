import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let productId = +route.paramMap.get('id');
        if(productId < 1 || isNaN(productId)){
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}