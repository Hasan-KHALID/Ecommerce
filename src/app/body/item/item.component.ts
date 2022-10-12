import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MyCartService } from 'src/app/my-cart.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

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
 

  constructor( public product: ProductService, public myCart:MyCartService, public route:Router) {
   
     
   }

  ngOnInit(): void {

    // this.route.navigate(['item'])
     
  }

  ngOnChanges(){
    this.currentItem = this.product.products[this.currentProducts]
    // this.route.navigate(['item'])
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
    this.myCart.addItem(this.currentItem.name,this.currentItem.image, this.amount,this.totalAmount, this.currentItem.Id)
    this.route.navigate(['mycart'])
    console.log(this.currentItem.Id)
  }
    
  
  


  

}
