import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { KeyService } from './key.service';
import { SearchGifsResponse } from '../gifs/interface/gifs.interface';
import { Persona } from '../gifs/interface/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private persona: Persona[] = [];


  get Personas() {

    return [...this.persona];
  }

  constructor(private http: HttpClient, private token: KeyService) { }

  buscarPersonas() {
    const headers = new HttpHeaders({ 'authorization': `bearer ${this.token.key}` });
    this.http.get<Persona[]>('/api/personas/', { headers })
      .subscribe((resp: Persona[]) => {
        this.persona = resp
      }, (err: any) => {
        this.showModal(err.error.message);
      })
  }

  showModal(mensaje: string) {
    Swal.fire({
      title: 'error!',
      text: mensaje,
      icon: 'error',
      confirmButtonColor: '#8CD4F5'
    }).then((result) => {
      this.token.cambiarKey = '';
      this.persona = [];
    })
  }

  agregarPersona(nuevo: Persona) {
    const headers = { 'authorization': `bearer ${this.token.key}` };
    const params = { 'nombre': nuevo.nombre, 'apellido': nuevo.apellido, 'edad': nuevo.edad };
    this.http.post<Persona[]>('/api/personas/', params, { headers })
      .subscribe((resp: Persona[]) => {
        this.persona = resp;
      }, (err: any) => {
        this.showModal(err.error.message);
      })
  }
}
