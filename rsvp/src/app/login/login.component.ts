import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPass:boolean = true;
  subDisabled: boolean = false;


  submitLogin(v) {
    alert(v.email);
  }

  constructor() { }

  ngOnInit() {
  }

}
