import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { OperatorbarComponent } from './operatorbar/operatorbar.component';
import { ProductbarComponent } from './productbar/productbar.component';
import { SuggestionbarComponent } from './suggestionbar/suggestionbar.component';
import { ClientdatabarComponent } from './clientdatabar/clientdatabar.component';
import { ProductdetailbarComponent } from './productdetailbar/productdetailbar.component';
import { SuggesterbarComponent } from './suggesterbar/suggesterbar.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    OperatorbarComponent,
    ProductbarComponent,
    SuggestionbarComponent,
    ClientdatabarComponent,
    ProductdetailbarComponent,
    SuggesterbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
