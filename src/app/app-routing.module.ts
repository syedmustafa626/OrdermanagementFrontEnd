import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent,canActivate:[AuthGuardGuard]},
  {path:'users',component:UsersComponent},
  {path:'products',component:ProductsComponent, canActivate:[AuthGuardGuard]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardGuard]},
  {path:'orders',component:OrdersComponent, canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
