import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product,productSearch } from '../data-types';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts:undefined | product[];
  trendyProducts:undefined | product[];

  
  productMessage:undefined|string;
  productList:undefined|product[];
  icon=faTrash;
  editIcon = faEdit;

  menuType:String = 'default';
  AdminName:string='';
  searchResult:undefined | product[];
  Result:undefined | productSearch[];
  userName:string="";
  searchtext:any;
  search1:any;

  msg: string = ''; 
  clss: string = ''; 
  
	products: product[] = [];


  constructor(private productservice:ProductsService, private route:Router, private adminAction:AdminHomeComponent){}
  
  answer = localStorage.getItem('session');
  ans = localStorage.getItem('sessionEdit');
  temp = localStorage.getItem('sessionSearch');

  ngOnInit():void{
    //this.product.popularProducts().subscribe((data)=>{
      //this.popularProducts = data;
   //});
   //this.product.trendyProducts().subscribe((data)=>{
     //  this.trendyProducts=data;
   //})

   this.List( );
  }

  deleteProduct(id:number)
  {
      if(confirm('Are you sure to delete record'))
      {
        console.warn("test is",id)
        this.productservice.deleteProduct(id).subscribe((result)=>{
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
  }

  List()
  {
    this.productservice.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }

  searchProduct(query:KeyboardEvent)
  {
     if(query)
     {
      const element = query.target as HTMLInputElement;
      this.productservice.SearchProducts(element.value).subscribe((result)=>{
          this.searchResult=result;
      })
     }
  }

  hideSearch()
  {
    this.searchResult=undefined;
  }

  submitSearch(val:string)
  {
     this.route.navigate([`search/${val}`])
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }

}
  
