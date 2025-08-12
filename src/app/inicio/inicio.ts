import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  constructor(public ruta:Router){}
  public name = ""
  public password = ""
  public usuario: any = {
    nombre: "Darwin",
    contrasena: "Hola"
  }
  ingreso(){
    if (this.name==this.usuario.nombre && this.password==this.usuario.contrasena){
      this.ruta.navigate(['p_inicial'])
    }
    else{
      
    } 
      
  }
}



