import { Component, Input, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from "../shared/product";

const SAMPLE_PRODUCTS = [
  {id: 1, name: "Product_Sample", isFull: true, 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sh209MMxKFXtyWOKLVXe-JjSc7_eFz-p6g&usqp=CAU"},
  {id: 2, name: "Product_Sample", isFull: true, 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sh209MMxKFXtyWOKLVXe-JjSc7_eFz-p6g&usqp=CAU"},
  {id: 3, name: "Product_Sample", isFull: true, 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sh209MMxKFXtyWOKLVXe-JjSc7_eFz-p6g&usqp=CAU"},
  {id: 4, name: "Product_Sample", isFull: true, 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sh209MMxKFXtyWOKLVXe-JjSc7_eFz-p6g&usqp=CAU"}
];

@Component({
  selector: 'app-productbar',
  templateUrl: './productbar.component.html',
  styleUrls: ['./productbar.component.css']
})

export class ProductbarComponent implements OnInit, DoCheck {

  constructor(private _productService: ProductService) { }
  @Input() searchT:string = "";

  products: Product[] = SAMPLE_PRODUCTS;
  aa: boolean = false;
  ngDoCheck(): void {/*
    if(!this.aa){
      this._productService.getProducts().subscribe(res => {console.log(res);
      this.products[0] = res[0];
      this.products[1] = res[1];
      this.products[2] = res[2];
      this.products[3] = res[3];});
      this.aa = true;
    }*/
  }
  
  
  ngOnInit(): void {
    this._productService.getProducts().subscribe(res => {console.log(res);
      this.products[0] = res[0];
      this.products[1] = res[1];
      this.products[2] = res[2];
      this.products[3] = res[3];});
    }

  

}
