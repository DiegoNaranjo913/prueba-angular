import { Component, Input } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Persona } from '../../gifs/interface/people.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent {

  @Input() nuevoPersonaje: Persona = {
    _id: '',
    nombre: '',
    apellido: '',
    edad: ''
  };

  constructor(private people: PeopleService) { }

  agregarUsuario() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) { return; }
    this.people.agregarPersona(this.nuevoPersonaje);
    this.limpiarFormulario();
    this.people.buscarPersonas();
  }

  limpiarFormulario() {
    this.nuevoPersonaje = {
      _id: '',
      nombre: '',
      apellido: '',
      edad: ''
    }
  }
}
