import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }