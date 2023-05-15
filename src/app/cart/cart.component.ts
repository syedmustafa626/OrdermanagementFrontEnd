import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getcart();
  } 
  
  del(CartId){
    if(
      confirm('Do you want to Confirm the Order?')      
      )
      {
      this.cartService.delcart(CartId).subscribe(res => {this.cartService.getcart();
        this.router.navigate(['/orders']);
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

}