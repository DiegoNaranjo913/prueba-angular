import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscarGifs') txtBuscarGifs!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscarGifs.nativeElement.value;

    if (valor.trim().length === 0) { return; }

    this.gifsService.traerGifs(valor);
  }
}