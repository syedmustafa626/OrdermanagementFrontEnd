import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../services/userregister.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public obj:UserregisterService,public router:Router) { }

  ngOnInit() {this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.obj.registerData={UserId:0,UserFname:'',UserLname:'',Roles:[],UserContact:'',UserCity:'',PinCode:'',UserEmail:'',UserPassword:''}
    }
  }

  onSubmit(form:NgForm){
    this.obj.postregister().subscribe(res => {
      this.obj.getregister();
      alert("You have Registered Successfully!!!");
      this.router.navigate(['/login']);
    },
    err => {
      alert("Email is already Registered")
    })
  }

}
