import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/data-types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-quick-add-product',
  templateUrl: './quick-add-product.component.html',
  styleUrls: ['./quick-add-product.component.css']
})
export class QuickAddProductComponent {

  productMsg:string|undefined; 
  constructor(private product:ProductsService,private route: Router){}
  @ViewChild('addProduct') myForm: any;

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

  cancel() {
    if (this.myForm.dirty == true) {
      if (confirm('there are some unsaved changes. Do you want to discard them?')) {
        this.route.navigate(['Home']);
      }
    }
    else {
      this.route.navigate(['Home']);
    }
  }

}
