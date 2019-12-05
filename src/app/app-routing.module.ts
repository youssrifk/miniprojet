import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { AjoutComponent } from './ajout/ajout.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
  {path:'ajouter produit',component:AjoutComponent},
  {path:'produit',component:ProduitComponent},
  {path:'view',component:ViewComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
