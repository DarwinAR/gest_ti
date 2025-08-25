import { Component } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-p-inicial',
  imports: [],
  templateUrl: './p-inicial.html',
  styleUrl: './p-inicial.css'
})
export class PInicial {

  constructor(public ruta:Router){}

  click_h(){
    this.ruta.navigate(["horario"])
}


}
