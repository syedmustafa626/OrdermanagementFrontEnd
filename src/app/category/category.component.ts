import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory();
  } 
  
  del(CategoryId){
    if(
      confirm('Cancel your Appointment ?')      
      )
      {
      this.categoryService.delCategory(CategoryId).subscribe(res => {this.categoryService.getCategory();
      alert("Appointment Deleted!!!")
      //Swal.fire('Appointment Deleted','','success');    
      
    },
      err=>(
        alert('Errror!!!'+err)
        //Swal.fire('Error!!! '+err,'','error')
        ));      
    }
  }
}
