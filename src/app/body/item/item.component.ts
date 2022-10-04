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
  amount:number= 0;
  totalAmount: number=0;
 

  constructor( public product: ProductService, public myCart:MyCartService) {
   

    console.log(this.currentProducts)
     
   }

  ngOnInit(): void {
     
  }

  ngOnChanges(){
    this.currentItem = this.product.products[this.currentProducts]
  }


  addAmount(){
    this.amount++;
    this.totalAmount =  this.currentItem.price * this.amount;
    
  }

  removeAmount(){
    this.amount--;
    this.totalAmount =  this.currentItem.price * this.amount;
  }




  addCart(){
    this.myCart.addItem(this.currentItem.name,this.currentItem.image, this.amount,this.totalAmount)
  }


  productIxdex(){
    console.log(this.currentProducts)
  }
    
  
  


  

}
