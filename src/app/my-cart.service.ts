import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  constructor() { }

  myCarts =[
    {
      name:"",
      img: "",
      amount:0,
      totalPrice:0
    }
  ]

  addItem(Name:string, img:string, amount:number, totalPrice:number){

    this.myCarts.push({name:Name, img:img, amount:amount, totalPrice:totalPrice})

  }

}
