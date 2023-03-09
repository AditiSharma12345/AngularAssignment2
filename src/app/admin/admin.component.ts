import { Component,OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {Router} from '@angular/router';
import { SignUp } from '../data-types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private admin:AdminService, private router:Router){}
  showLogin = false;
  AuthError:string = '';

  ngOnInit(): void{
    this.admin.AdminReload();
  }

  signUp(data:SignUp): void
  {
    console.warn(data);
    this.admin.AdminSignUp(data)
  }
  
  login(data:SignUp): void
  {
    this.AuthError="";
    //console.warn(data);
    this.admin.AdminLogin(data)
    this.admin.isLoginError.subscribe((isError)=>{
      if(isError)
      {
         this.AuthError="Email or password is not correct";
      }
    })
  }

  openLogin()
  {
     this.showLogin=true;
  }

  openSignUp()
  {
    this.showLogin=false;
  }
}
