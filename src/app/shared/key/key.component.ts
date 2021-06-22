import { Component } from '@angular/core';
import { KeyService } from '../../services/key.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {

  get key() {
    return this.token.key;
  }

  constructor(private token: KeyService) {

  }

  generarToken() {
    this.token.generarKey();
  }
}
