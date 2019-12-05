import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { Monp } from '../monp';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
lesprod:Monp[];

  constructor(private service:ProdService) { }

  ngOnInit() {
    this.lesprod = this.service.ntprod;
  }
statu(test:boolean)
{
 
  
  if (test==true)
  {return "oui";}
  else
  {return "non";}
  }
}


