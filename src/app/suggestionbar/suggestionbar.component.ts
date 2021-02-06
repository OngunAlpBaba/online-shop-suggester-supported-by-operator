import { Component, OnInit } from '@angular/core';
import { Product } from "../shared/product";

@Component({
  selector: 'app-suggestionbar',
  templateUrl: './suggestionbar.component.html',
  styleUrls: ['./suggestionbar.component.css']
})
export class SuggestionbarComponent implements OnInit {

  question: boolean = true;

  product: Product = {id: 0, name: "Product_Sample", isFull: true, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sh209MMxKFXtyWOKLVXe-JjSc7_eFz-p6g&usqp=CAU"};

  constructor() { }

  ngOnInit(): void {

  }

  likeorDis(lik: boolean):void{
    this.question = false;
  }

}
