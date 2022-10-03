import { Component, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(public myCart: MyCartService) { }

  ngOnInit(): void {
  }

}
