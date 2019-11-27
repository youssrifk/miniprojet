import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ProduitComponent } from './produit/produit.component';
import { ProdService } from './prod.service';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AjoutComponent,
    ProduitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
