import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../filiere.service';
import { Filiere } from '../models/filiere';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  // récupère le filière saisie
  filiere: Filiere = {
    idFiliere: 0,
    nomFiliere: ''
  };
  // liste des filières
  filieres;

  constructor(private filiereService: FiliereService) { }

  ngOnInit() {
    this.getAllFilieres();
  }

  saveFiliere() {
    this.filiereService.addFiliere(this.filiere)
      .subscribe(data => {
        this.filiere = data
        this.getAllFilieres();
        this.filiere.nomFiliere = '';
        this.filiere.idFiliere = 0;
      });
  }

  getAllFilieres() {
    this.filiereService.getAllFilieres()
      .subscribe(data => {
        this.filieres = data
      })
  }

  detailFiliere(idFiliere: number) {

  }

  deleteFiliere(idFiliere: number) {
    this.filiereService.deleteFiliere(idFiliere)
      .subscribe(data => this.ngOnInit()
      )
  }
}