import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../gifs/interface/gifs.interface';
import { KeyService } from './key.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public resultados: Gif[] = [];



  constructor(private http: HttpClient, private token: KeyService) {

  }

  traerGifs(valor: string) {
    const headers = { 'authorization': `bearer ${this.token.key}` };
    const params = { 'query': valor };
    this.http.post<SearchGifsResponse>('/api/gifs/', params, { headers })
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
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
    })
  }
}
