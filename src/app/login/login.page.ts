import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}
  ngOnInit() {}
  logIn(email: any, password: any) {
    this.authService.SignIn(email.value, password.value)
      .then(() => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}