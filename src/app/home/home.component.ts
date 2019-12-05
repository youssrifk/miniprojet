import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id:string;
  constructor(private date:ProdService) { }

  ngOnInit() {
    this.date.res.subscribe(msg=>this.id=msg)
  }
  val()
  {
  return  this.date.change("s");
  }
  val2()
  {
    return this.date.change("c");
  }
  val3()
  {
    return this.date.change("t");
  }


}
