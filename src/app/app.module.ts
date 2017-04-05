import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { routes } from "app/app.route";
import { PageNotFound } from "app/PageNotFound.component";
import { PurchaseComponent } from "app/purchasePage/purchase.component";
import { ProductListComponent } from "app/productPage/productlist.component";
import { ProductComponent } from "app/productPage/product.component";
import { FormRoute } from "./form/form.route";
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    PurchaseComponent,
    PageNotFound
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
