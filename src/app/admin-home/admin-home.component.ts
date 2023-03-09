import { Component,OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent 
{
  constructor(){}
   
  AllowDelete()
  {
    let data = "true";
    localStorage.setItem('session',data);
  }
  NotAllowDelete()
  {
    let data = "false";
    localStorage.setItem('session',data);
  }

  AllowEdit()
  {
    let data1 = "true";
    localStorage.setItem('sessionEdit',data1);
  }
  NotAllowEdit()
  {
    let data1 = "false";
    localStorage.setItem('sessionEdit',data1);
  }

  AllowSearch()
  {
    let data2 = "true";
    localStorage.setItem('sessionSearch',data2);
  }
  NotAllowSearch()
  {
    let data2 = "false";
    localStorage.setItem('sessionSearch',data2);
  }
  

  /*constructor(private product:ProductsService){}

  productMessage:undefined|string;
  productList:undefined|product[];
  icon=faTrash;
  editIcon = faEdit;


  ngOnInit():void{
    this.List( );
  }

  deleteProduct(id:number)
  {
      console.warn("test is",id)
      this.product.deleteProduct(id).subscribe((result)=>{
        if(result)
        {
          this.productMessage="this product is deleted";
          this.List();
        }
      })
      setTimeout(() => {
        this.productMessage=undefined
      }, 3000);
  }

  List()
  {
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }*/

  
    /*var cl = document.getElementsByClassName(index);
    if(ev.target.checked)
    {
      console.log(index);
      for(let i=0;i<cl.length; i++)
      {
        cl[i].classList.add("tabCol");
      }
    }else{
      
      for(let i=0;i<cl.length; i++)
      {
        cl[i].classList.remove("tabCol");
      }
    }*/
}
