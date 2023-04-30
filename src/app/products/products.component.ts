import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts();
  } 
  
  del(ProductId){
    if(
      confirm('Do you want to delete the product ?')      
      )
      {
      this.productsService.delProducts(ProductId).subscribe(res => {this.productsService.getProducts();
      alert("Product Deleted!!!")
      
    },
      err=>(
        alert('Errror!!!'+err)
        ));      
    }
  }

}
