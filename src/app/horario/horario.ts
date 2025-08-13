import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario',
  imports: [CommonModule],
  templateUrl: './horario.html',
  styleUrl: './horario.css'
})
export class Horario {
  constructor(public ruta: Router){}
  
  semana = [
    {dia:'Lunes'},
    {dia:'Martes'},
    {dia:'Miercoles'},
    {dia:'Jueves'},
    {dia:'Viernes'},
    {dia:'Sabado'}
  ]
  volver(){
    this.ruta.navigate(['p_inicial']);

  }
}
