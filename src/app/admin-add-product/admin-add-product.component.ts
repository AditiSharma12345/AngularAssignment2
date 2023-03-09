import { Component } from '@angular/core';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {
  productMsg:string|undefined; 
  constructor(private product:ProductsService){}
  submit(data:product)
  {
     this.product.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.productMsg="Product successfully added";
      }
      setTimeout(()=>this.productMsg=undefined,3000)
     })
  }
}

