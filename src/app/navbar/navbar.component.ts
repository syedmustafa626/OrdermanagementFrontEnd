import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  local:any;
  ngOnInit(): void {
    this.local=localStorage;
  }

  logOut(){
    localStorage.clear();        
    this.router.navigate(['/login'],{state:{status:{message:"Logout success!!",error:true}}}).then(()=>{
      window.location.reload();
    })
    
  }

}
