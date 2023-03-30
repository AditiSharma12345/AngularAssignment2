import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product, productSearch } from '../data-types';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { concat, debounceTime, distinctUntilChanged, fromEvent, map, Observable, of, Subject, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productMessage: undefined | string;
  productList: undefined | product[];
  icon = faTrash;
  editIcon = faEdit;

  menuType: String = 'default';
  AdminName: string = '';
  searchResult: undefined | product[];
  searchtext: any;
  query: any;
  products: product[] = [];


  constructor(private productservice: ProductsService, private route: Router, private adminAction: AdminHomeComponent, private router: ActivatedRoute, private http: HttpClient) {

  }
  answer = localStorage.getItem('session');
  ans = localStorage.getItem('sessionEdit');
  temp = localStorage.getItem('sessionSearch');

  ngOnInit(): void {
    this.List();
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.productservice.SearchProducts(element.value).subscribe((result) => {
        this.searchResult = result;
        console.log(this.searchResult);
        return this.searchResult;
      })
    }
  }

  List() {
    this.productservice.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id])
  }

  checkboxselectlist: any[] = [];

  filterResults(obj: any, e: any) {
    if (e.currentTarget.checked == true) {
      this.checkboxselectlist.push(obj.id);
      console.log(this.checkboxselectlist);
    }
    if (e.currentTarget.checked == false) {
      this.checkboxselectlist.forEach((element, index) => {
        if (element == obj.id) {
          this.checkboxselectlist.splice(index, 1);
        }
      })
    }
  }

  DeleteAll() {
    if (confirm('Are you Sure?')) {
      this.checkboxselectlist.forEach((element, index) => {
        this.deleteProduct(element);
      })
      this.checkboxselectlist.length=0;
    }
  }

  deleteProduct(id: number) {
    this.productservice.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.List();
      }
    })
  }
}

