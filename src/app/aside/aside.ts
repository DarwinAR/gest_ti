import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
  constructor(public ruta: Router){}
  volver(){
    this.ruta.navigate(['p_inicial']);

  }
}
