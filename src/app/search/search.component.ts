import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product,productSearch } from '../data-types';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult:undefined | product[];
  Result:undefined|productSearch[];

  constructor(private activateRoute:ActivatedRoute, private product:ProductsService){}
  noSearchResult=true;

  ngOnInit():void{
    let query = this.activateRoute.snapshot.paramMap.get(`query`);
    query && this.product.SearchProducts(query).subscribe((result)=>{
      this.noSearchResult = false;
       this.searchResult = result;
    })
    query && this.product.SearchProducts(query).subscribe((result1)=>{
      this.noSearchResult = false;
       this.Result = result1;
    })

  }

}
