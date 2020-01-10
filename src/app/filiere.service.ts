import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filiere } from './models/filiere'

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAllFilieres(): Observable<Filiere> {
    return this.http.get<Filiere>(this.host + '/filieres');
  }

  public getFiliere(id: number): Observable<Filiere> {
    return this.http.get<Filiere>(this.host + '/filieres/' + id);
  }

  public addFiliere(filiere: Filiere): Observable<Filiere> {
    return this.http.post<Filiere>(this.host + '/filieres', filiere);
  }

  public updateFiliere(id: number, filiere: Filiere): Observable<Filiere> {
    return this.http.put<Filiere>(this.host + '/filieres' + id, filiere);
  }

  public deleteFiliere(id: number): Observable<Filiere> {
    return this.http.delete<Filiere>(this.host + '/filieres/' + id);
  }
}
