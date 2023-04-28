import { Component, OnInit } from '@angular/core';

declare function ocultar():void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      ocultar();
    }, 2000);
}
}
