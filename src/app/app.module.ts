import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './body/item/item.component';
import { MyCartComponent } from './body/item/my-cart/my-cart.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './body/item/order/order.component';


const appRoutes: Routes = [
  
  {
    path:'' , component: BodyComponent
  },
  {
    path:'mycart' , component: MyCartComponent
  },
  {
    path:'item', component: ItemComponent
  },
  {
    path: 'order', component: OrderComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    ItemComponent,
    MyCartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
