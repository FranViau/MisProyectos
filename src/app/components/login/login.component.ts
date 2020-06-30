import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user :User;
  public sePuede :boolean;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.user = new User("","");
    this.sePuede = true;
  }

  onSubmit(form){
    if(this.user.nombre == "FranViau" && this.user.contra == "fran1211"){
      this.router.navigate(["/projects"]);
    }
    else{
      this.sePuede = false;
    }
  }

}
