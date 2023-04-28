import { Component, OnInit } from '@angular/core';

declare function mostrar():void;
declare function ocultar():void;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
      setTimeout(() => {
        mostrar(),
        ocultar();
      }, 2000);
  }
}
