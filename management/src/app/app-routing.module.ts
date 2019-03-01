import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: '/presentations', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signUp', component:SignUpComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
