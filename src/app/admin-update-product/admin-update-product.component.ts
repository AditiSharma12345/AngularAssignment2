import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent {
  
  productMsg:undefined | string;
  productData:undefined | product
  constructor(private route:ActivatedRoute,private product:ProductsService, private router:Router){}

  ngOnInit():void{
    let ProductId = this.route.snapshot.paramMap.get('id');
    console.warn(ProductId);
    ProductId && this.product.getProduct(ProductId).subscribe((data)=>{
      console.warn(data);
      this.productData = data;
    })
  }

  submit(data:product)
  {
    if(this.productData)
    {
      data.id = this.productData.id;
    }
      this.product.updateProduct(data).subscribe((result)=>{
          if(result)
          {
            this.productMsg = "Product Updated";
          }
      });
      setTimeout(()=>{
        this.productMsg=undefined;
        this.router.navigate(['Admin-home'])
      },3000)
  }


}
