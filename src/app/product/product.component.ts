import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() productInput: any;

  ngOnInit(): void {
  }

  getDetail(){

  }

}
