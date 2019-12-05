import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:string;
mdp:string;
ch:string='user';
verif:boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(frm:NgForm)
  {

    if((this.login===this.ch) && (this.mdp===this.ch))
    {
      this.verif=true;
     
    }
   return this.verif; 


  }



}




