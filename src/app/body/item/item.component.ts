import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() currentProducts:number = 0 ;

  currentItem:any;
 

  constructor( public product: ProductService) {
   

    console.log(this.currentProducts)
     
   }

  ngOnInit(): void {
     
  }

  ngOnChanges(){
    this.currentItem = this.product.products[this.currentProducts]

  }


  productIxdex(){
    console.log(this.currentProducts)
  }
    
  
  


  

}
