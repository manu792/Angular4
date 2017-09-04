import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductListService } from './services/product-list.service';
import { HttpModule } from "@angular/http";
import { ConvertToSpaces } from "./Pipes/convertToSpaces";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
