import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-remise',
  templateUrl: './remise.component.html',
  styleUrls: ['./remise.component.css']
})
export class RemiseComponent implements OnInit {
id:string;
lib:number;
  constructor(private service:ProdService) { }

  ngOnInit() {
  }
remise(frm:NgForm)
{
return this.service.remise(this.id,this.lib);
}
}
