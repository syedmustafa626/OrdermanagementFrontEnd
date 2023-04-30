import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from '../services/authorize.service';

// import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthorizeService,
    public http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.logIn(this.loginForm.value).subscribe({
        next: (res) => {
          alert('Login Successful' + 'success');
          console.log(res.UserName);
          localStorage.setItem('UserId', res.UserName);
          console.log(localStorage.getItem('UserId'));
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          this.router.navigate(['/category']);
        },
        error: (err) => {
          alert('Invalid Credentials' + alert);
        },
      });
    } else {
      alert('Unsuccessful!!');
    }
  }
}
