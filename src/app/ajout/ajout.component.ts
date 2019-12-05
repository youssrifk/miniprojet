import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { ProdService } from '../prod.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
id:string;
lib:string;
src:string; 
ch:string="";
taille:string;
date:Date;
prix:number;
remise:string;
test:boolean=false;

handleUpload(e):void{
  this.src= e.target.value;

}

 

  constructor(private service:ProdService) { }

  ngOnInit() {
  }

ajout(frm:NgForm)
{

this.src='../'+this.src.substr(this.src.indexOf('assets'),this.src.length);
console.log(this.src);

  if(this.remise==='oui')
  {
    this.test=true;
    
    return this.service.addprod(this.id,this.lib,this.src,this.prix,this.test,this.date,this.taille);}
    else if(this.remise==='non')
    {
this.test=false;

return this.service.addprod(this.id,this.lib,this.src,this.prix,this.test,this.date,this.taille);

}
}
}
