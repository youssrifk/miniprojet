import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { Monp } from '../monp';

@Component({
  selector: 'app-view ',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
ide:string;
lesprod:Monp[];
test:boolean=false;
  constructor(private data:ProdService) { }

  ngOnInit() {
    this.lesprod = this.data.ntprod;
    this.data.res.subscribe(msg=>this.ide=msg)
  }

affiche()
{
  return this.ide;
}
statu(test:boolean)
{
 
  
  if (test==true)
  {return "oui";}
  else
  {return "non";}
  }
  del(id:string)
  {
    
    return this.data.delprod(id);
  }
  mod()
  {
 return this.test=true;
  }
}
