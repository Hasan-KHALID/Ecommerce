import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  currentProduct: number = 0;

  

  constructor(public products: ProductService) {

   }

  ngOnInit(): void {
    
  }
  updateCurrent(){
  }


  selectItem(){
    this.products.viewItem = true;
  }



}
