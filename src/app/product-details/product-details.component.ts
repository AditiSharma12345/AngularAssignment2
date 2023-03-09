import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productData : undefined | product;
  constructor(private route:ActivatedRoute, private product:ProductsService){}

  ngOnInit():void

  {
    let productId = this.route.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((result)=>{
        this.productData = result;
    })
  }
}
