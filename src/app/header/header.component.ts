import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route:Router, private product:ProductsService){}
  menuType:String = 'default';
  AdminName:string='';
  searchResult:undefined | product[];
  userName:string="";
  BarIcon = faBars;


  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('Admin') && val.url.includes('Admin'))
        {
          console.warn("in admin area")
          this.menuType='Admin'
          if(localStorage.getItem('Admin'))
          {
            let AdminStore = localStorage.getItem('Admin');
            let AdminData = AdminStore && JSON.parse(AdminStore)[0];
            this.AdminName = AdminData.name;
          }
        }
        else if(localStorage.getItem('user'))
        {
            let userStore=localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName = userData.name;
            this.menuType="user";
        }
        else{
          console.warn("outside admin area")
          this.menuType='default';
        }
      }
    })
  }

  logout()
  {
    localStorage.removeItem('Admin');
    this.route.navigate(['/']);
  }

  userLogout()
  {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  searchProduct(query:KeyboardEvent)
  {
     if(query)
     {
      const element = query.target as HTMLInputElement;
      this.product.SearchProducts(element.value).subscribe((result)=>{
          this.searchResult=result;
      })
     }
  }
  
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
}
