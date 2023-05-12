import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgForm } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // ProductId:string=localStorage.getItem("ProductId");
  // ProductId1:number=1;

  constructor(public productsService:ProductsService, public cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.productsService.getProducts();
  } 
  
  del(ProductId){
    if(
      confirm('Do you want to delete the product ?')      
      )
      {
      this.productsService.delProducts(ProductId).subscribe(res => {this.productsService.getProducts();      
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

  fillForm(selectedPP){
    this.productsService.productsData=Object.assign({},selectedPP)
  }

  AddToCart(form:NgForm){
    this.cartService.cartData.ProductId=this.productsService.productsData.ProductId
    this.cartService.cartData.Totalcost=this.productsService.productsData.ProductPrice
    this.cartService.postcart().subscribe(res =>{
      this.cartService.getcart();      
      alert("Added to Cart!!")
      this.router.navigate(['/cart']);
    },
    err => {
      alert('Invalid User ID')
    })
  }

}
