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

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    OperatorbarComponent,
    ProductbarComponent,
    SuggestionbarComponent,
    ClientdatabarComponent,
    ProductdetailbarComponent,
    SuggesterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
