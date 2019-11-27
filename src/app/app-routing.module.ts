import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitComponent } from './produit/produit.component';
import { AjoutComponent } from './ajout/ajout.component';


const routes: Routes = [

  {path:'ajouter produit',component:AjoutComponent},
  {path:'produit',component:ProduitComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
