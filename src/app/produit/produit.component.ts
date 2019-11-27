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
src:string;
  constructor(private service:ProdService) { }

  ngOnInit() {
    this.lesprod = this.service.ntprod;
  }
statu()
{
 
  for(let i=0;i<this.lesprod.length;i++)
  {
  if (this.lesprod[i].remsie==true)
  {return "%";}
  else
  {return "";}
  }
}
image()
{
  for(let i=0;i<this.lesprod.length;i++)
  {
 this.src=this.lesprod[i].imge;
 return this.src;
  }
}
}
