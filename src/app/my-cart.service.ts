import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  constructor() { }

  myCarts =[
    {
      name:"No item selected",
      img: "",
      amount:0,
      totalPrice:0,
      guid:0
    }
  ]

  addItem(Name:string, img:string, amount:number, totalPrice:number, guid: number){

    this.myCarts.push({name:Name, img:img, amount:amount, totalPrice:totalPrice, guid:guid})

  }

  removeItem(){
     while (this.myCarts.length > 1) {
    this.myCarts.pop();
  }
  }

}
