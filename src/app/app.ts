import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { FormGroup, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[Inicio,FormsModule],
  styleUrl: './app.css'
})
export class App {
  protected title = 't_i';

public number=12
public usuario=""

  click() {
    let nombre = "darwin"
    if (this.usuario==nombre){
      alert("El nombre es correcto")
    }
    else{
      alert("No es correcto")
    }
      
    let number = "Buenas tardes"
    console.log(number)

    
  } 
}
