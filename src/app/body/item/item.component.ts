import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MyCartService } from 'src/app/my-cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() currentProducts:number = 0 ;

  currentItem:any;
 

  constructor( public product: ProductService, public myCart:MyCartService) {
   

    console.log(this.currentProducts)
     
   }

  ngOnInit(): void {
     
  }

  ngOnChanges(){
    this.currentItem = this.product.products[this.currentProducts]

  }

  addCart(){
    this.myCart.addItem(this.currentItem.name,this.currentItem.image, this.currentItem.amount,this.currentItem.price)
  }


  productIxdex(){
    console.log(this.currentProducts)
  }
    
  
  


  

}
