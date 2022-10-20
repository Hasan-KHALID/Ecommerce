import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCartService } from 'src/app/my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  order:boolean = false;

  constructor(public myCart: MyCartService, public route: Router) { }

  ngOnInit(): void {
  }

  onOrder(){

    this.order = true;
    this.myCart.removeItem()
    this.route.navigate(['order'])

  }

}
