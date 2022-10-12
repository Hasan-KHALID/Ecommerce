import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  viewItem = false;

  constructor() { }

  products = [
    {
      name: "pant",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638381193-b37250b6-0210-44d9-8722-4909b950eab9_xo6nfcmaubgtuscy.jpg",
      details: "nice and comfortable",
      price: 340,
      amount: 8,
      Id: this.guid()
      
    },
    {
      
      name: "shirt",
      image: "https://static-01.daraz.com.bd/p/14fbe7427960adc9a7ed1f2e746d511f.jpg",
      details: "nice and comfortable easy to wear",
      price: 539,
      amount: 9,
      Id: this.guid()
    
    },
    {
      name: "t-shirt",
      image: "https://static-01.daraz.com.bd/p/6fecfbc68a22cb1feb2a0151ef823478.jpg",
      details: "nice and comfortable",
      price: 120,
      amount: 4,
      Id: this.guid()
    },
    {
      name: "Panjabi",
      image: "https://saralifestyle.com.bd/Files/ImageProductMain/49772782-32c8-4dbe-a39c-daad4a4ad47f.jpg",
      details: "nice and comfortable",
      price: 120,
      amount: 4,
      Id: this.guid()
    },
  {
    name: "Panjabi",
      image: "https://saralifestyle.com.bd/Files/ImageProductMain/49772782-32c8-4dbe-a39c-daad4a4ad47f.jpg",
      details: "nice and comfortable",
      price: 120,
      amount: 4,
      Id: this.guid()
  }
  ]

  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}


}
