import { Component } from '@angular/core';
import { login, SignUp } from '../data-types';
import { UserService } from '../services/user.service';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  
  productMessage:undefined|string;
  productList:undefined|product[];
  icon=faTrash;
  editIcon = faEdit;

  AuthError:string="";
  showLogin = true;
  constructor(private user:UserService, private product:ProductsService){

  }
  ngOnInit()
  {
    this.user.userAuthReload();
  }
  signUp(data:SignUp)
  {
    this.user.userSignUp(data);
  }
  login(data:login)
  {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn("apple",result)
        if(result)
        {
           this.AuthError="Please enter valid details"
        }
    })
  }

  openSignUp()
   {
       this.showLogin=false;
   }
   openLogin()
   {
       this.showLogin=true;
   }
}
 
