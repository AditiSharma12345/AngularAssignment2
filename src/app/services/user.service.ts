import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient, private route:Router) { }
  userSignUp(user:SignUp)
  {
    console.warn(user);
     this.http.post("http://localhost:3000/users",user,{observe:'response'})
     .subscribe((result)=>{
      console.warn(result);
      if(result)
      {
        localStorage.setItem('user',JSON.stringify(result.body));
        this.route.navigate(['/']);
      }
     })
  }
  userAuthReload()
  {
    if(localStorage.getItem('user'))
    {
      this.route.navigate(['/'])
    }
  }
  userLogin(data:login)
  {
     this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
     {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length)
      {
        this.invalidUserAuth.emit(false)
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.route.navigate(['/']);
      }
      else{
        this.invalidUserAuth.emit(true)
      }
     })
  }
}
