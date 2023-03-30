import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../data-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  private productUrl = 'http://localhost:3000';
  addProduct(data:product)
  {
    return this.http.post('http://localhost:3000/products',data);
  }
  productList()
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProduct(id:number)
  {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string)
  {
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:product)
  {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }
  SearchProducts(query:string)
  {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
}






