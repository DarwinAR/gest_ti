import { Component, OnInit } from '@angular/core';
import { Eventos } from '../services/eventos';
import { evento } from '../interface/intereventos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-reserva',
  imports: [FormsModule],
  templateUrl: './form-reserva.html',
  styleUrl: './form-reserva.css'
})
export class FormReserva implements OnInit {
  infoevento: evento [] = []

  constructor(private dataForm:Eventos){}

  eventoInfo={
  id : 0,
  usuario:"",
  evento: "",
  fecha: "",
  lugar: "",
  nombre: ""
  }
  


  ngOnInit(): void {
    console.log(this.infoevento.length)
  }

  llenar(){
    this.infoevento.push(this.eventoInfo);
    console.log(this.infoevento)    
    this.dataForm.putEvento(this.infoevento)
  }
}
