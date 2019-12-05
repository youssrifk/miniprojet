import { Injectable } from '@angular/core';
import { Monp } from './monp';
import{ BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ProdService {
ntprod=[new Monp('s13','nike','../assets/nike.jpg',2000,true,new Date('2019/12/5'),'s'),
new Monp('s10','adidas','../assets/adidas.jpg',2000,true,new Date('2019/12/5'),'s'),
new Monp('t13','nike','../assets/trnike.jpg',2000,true,new Date('2019/12/5'),'m'),
new Monp('ch13','nike','../assets/chnike.jpg',2000,true,new Date('2019/12/5'),'l')
]
private msg=new BehaviorSubject<string>("id");
res=this.msg.asObservable();

  constructor() { }
  change(ch:string)
  {
    this.msg.next(ch);
  }
  getidrpod(ide)
  {
let i=0;
let test=false;
while(i<this.ntprod.length && test==false)
{
  if(this.ntprod[i].id==ide)
   test =true;
   i++;
}
return test;
  }
  addprod(id,lib,img,price,rem,dt,taille)
  {
    if(this.getidrpod(id)==false)
this.ntprod.push(new Monp(id,lib,img,price,rem,dt,taille));
  }
delprod(id)
{
  for(let i=0;i<this.ntprod.length;i++)
  {
  if(this.ntprod[i].id==id)

   this.ntprod.splice(i,1);}
}
modify(id,lib,price,rem,dt,taille)
{
for(let i=0;i<this.ntprod.length;i++)
{
  if(this.ntprod[i].id==id)
  {
this.ntprod[i].libb=lib;
this.ntprod[i].prix=price;
this.ntprod[i].datf=dt;
this.ntprod[i].remise=rem;
this.ntprod[i].taille=taille;


  }
}
}
}

