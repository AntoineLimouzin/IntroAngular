import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
  infos = {
    nom: 'dupond',
    prenom: 'serge',
    telephone: '0123456789'
  }
  constructor() { }

  getInfos(){
    return this.infos;
  }
}
