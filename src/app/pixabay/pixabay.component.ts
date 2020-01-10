import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../pixabay.service';

@Component({
  selector: 'app-pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.css']
})
export class PixabayComponent implements OnInit {

  motCle = '';
  loading = true;
  error  = '';
  images: Array<Object> = new Array<Object>();

  constructor(private serv: PixabayService) { }

  ngOnInit() {
  }

  onSearch(){
    this.serv.onSearch(this.motCle)
    .subscribe(
      value => {
        this.images = value,
        this.loading = false;
      },
      error => this.error = error
    )
  }

}
