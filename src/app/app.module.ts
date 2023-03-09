import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule} from 'ng2-order-pipe';
import {SearchTextPipe} from './search-text.pipe';
import { QuickAddComponent } from '.angular/quick-add/quick-add.component';
import { CustomPipe } from './custom.pipe';
import { SortPipe } from './sort.pipe'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    SearchTextPipe,
    QuickAddComponent,
    CustomPipe,
    SortPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    Ng2SearchPipeModule,

  ],
  providers: [AdminHomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
