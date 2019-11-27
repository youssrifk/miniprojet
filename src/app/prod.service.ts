import { Injectable } from '@angular/core';
import { Monp } from './monp';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
ntprod=[new Monp('13','hot','.\assets\shirt.jpg',2000,true,new Date('2019/12/5'),'shirts','s')]
  constructor() { }

}
