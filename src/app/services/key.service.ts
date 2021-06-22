import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  private _key: string = '';


  get key() {
    return this._key;
  }

  set cambiarKey(token: string) {
    this._key = token;
  }

  constructor(private http: HttpClient) {

  }

  generarKey() {
    if (this._key) { return; }
    this.http.get('/api/')
      .subscribe((resp) => {
        this._key = resp.toString();
      })
  }

}
