import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifyp',
  templateUrl: './modifyp.component.html',
  styleUrls: ['./modifyp.component.css']
})
export class ModifypComponent implements OnInit {

  id:string;
lib:string;

ch:string="";
taille:string;
date:Date;
prix:number;
remise:string;
test:boolean=false;



 

  constructor(private service:ProdService) { }

  ngOnInit() {
  }

modify(frm:NgForm)
{



  if(this.remise==='oui')
  {
    this.test=true;
    
    return this.service.modify(this.id,this.lib,this.prix,this.test,this.date,this.taille);}
    else if(this.remise==='non')
    {
this.test=false;

return this.service.modify(this.id,this.lib,this.prix,this.test,this.date,this.taille);

}
}

}
