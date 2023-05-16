import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(public productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    
  }

  resetForm(form:NgForm){
    if(form!=null){
      form.reset();
    }
    else{
      this.productsService.productsData={ProductId:0,ProductName:'',CategoryId:'',ProductPrice:''}
    }
  }

  onSubmit(form:NgForm){
    this.productsService.postProducts().subscribe(res=>{
      this.productsService.getProducts();
      alert("Product Added !!!");
      this.router.navigate(['/products'])
    },
    err=>{
      alert("Product Not Inserted")
    }
    )
    
  }
}
