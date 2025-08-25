import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { UsuariosService, Usuario } from '../services/usuarios.service';


@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit{
  usuarios: Usuario[] = [];
  
  constructor(public ruta:Router, private usuariosServices: UsuariosService){}

  ngOnInit(): void{
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuariosServices.getUsuarios().subscribe({
      next:(resp) =>{
        this.usuarios = resp;
        console.log(this.usuarios)
      }
    })
  }
  public name = ""
  public password = ""

  ingreso(){
    for(let i = 0; i<= this.usuarios.length; i++){
      if (this.name==this.usuarios[i].email && this.password==this.usuarios[i].password){
      this.ruta.navigate(['p_inicial'])
      }
      else{
      console.log("los datos no coinciden")
      }
    }
     
      
  }
}



