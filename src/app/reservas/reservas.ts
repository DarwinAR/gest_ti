import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { Eventos } from '../services/eventos';
import { evento } from '../interface/intereventos';



@Component({
  selector: 'app-reservas',
  imports: [ DataTablesModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class Reservas implements OnInit {

  constructor(private dataEventos: Eventos){}

  data: evento[] = []

objRecibido: any;
  dtOptions: Config={};
  ngOnInit(): void {
    this.dataEventos.getEvento().subscribe({
      next:(resp) =>{
        this.data = resp;
      }
    })
    this.dtOptions = {
      data: this.data,
      columns: [{
        title: 'Id',
        data: 'id'
      },
        {
        title: 'Usuario',
        data: 'usuario'
      }, {
        title: 'Evento',
        data: 'evento'
      }, {
        title: 'Fecha / Hora',
        data: 'fecha'
      },{
        title: 'Lugar',
        data: 'lugar'
      }]
    };
  }
}
