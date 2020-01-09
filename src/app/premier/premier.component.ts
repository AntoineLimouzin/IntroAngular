import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {

  var1 = 'ma premiere variable';
  var2: string;
  constructor() { }

  ngOnInit() {
    this.var2 = 'ma 2eme variable';
  }

}
