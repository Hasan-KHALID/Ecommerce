import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  currentProduct: number = 0;

  

  constructor(public products: ProductService, public router: Router) {

   }

  ngOnInit(): void {
    
  }
  updateCurrent(){
  }


  selectItem(){
    this.products.viewItem = true;
    // this.router.navigate(['item'])
  }



}
