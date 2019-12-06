import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ProduitComponent } from './produit/produit.component';
import { ProdService } from './prod.service';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ModifypComponent } from './modifyp/modifyp.component';
import { RemiseComponent } from './remise/remise.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AjoutComponent,
    ProduitComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    ModifypComponent,
    RemiseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule
  ],
  providers: [ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
