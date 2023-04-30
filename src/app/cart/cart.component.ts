import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getcart();
  } 
  
  del(CartId){
    if(
      confirm('Do you want to delete the Cart Item ?')      
      )
      {
      this.cartService.delcart(CartId).subscribe(res => {this.cartService.getcart();
      alert("Cart Item Deleted!!!")
      
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

}
