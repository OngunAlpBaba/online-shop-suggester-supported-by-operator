import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../shared/product";
import { Session } from "../shared/session";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchT=new EventEmitter<string>();

  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  searchh(par:string):void{
    this.searchText=par;
  }

  searchClick(): void{
    if(this.searchText != ""){
      this.searchT.emit(this.searchText);
    }
  }
}
