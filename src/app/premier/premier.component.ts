import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {

  var1 = 'ma premiere variable';
  var2: string;
  var3 = 25;
  varInj;
  constructor(private serv: PremierService) { }

  ngOnInit() {
    this.var2 = 'ma 2eme variable';
    this.varInj = this.serv.getInfos();
  }

}
