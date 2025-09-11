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
  usuario:"",
  evento: "",
  fecha: "",
  lugar: "",
  }
  


  ngOnInit(): void {
    console.log(this.infoevento.length)
  }

  llenar(): void{
    this.dataForm.putEvento(this.eventoInfo).subscribe({
      next:(resp) =>{
        this.infoevento.push(resp);
        console.log(this.infoevento)
      }
    })
  }
}
