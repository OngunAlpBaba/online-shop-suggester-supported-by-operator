import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shop-suggester-supported-by-operator';
  user="asds";
  oz="";
  searchText:string = "";

  ozLoggedIn(operatorName:string):void{
    this.oz = operatorName;
    this.user = "";
  }

  searched(searchText:string):void{
    this.searchText = searchText;
  }
}
