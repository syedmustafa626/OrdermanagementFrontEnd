import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptorInterceptor } from './services/jwt-interceptor.interceptor';
import { FilterPipe } from './shared/filter.pipe';
import { ProductfilterPipe } from './shared/productfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,
    LoginComponent,
    NavbarComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    FilterPipe,
    ProductfilterPipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule,    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
