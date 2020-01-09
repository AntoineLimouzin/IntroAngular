import { Component, OnInit } from '@angular/core';
import { BindingService } from '../binding.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  comments = this.serv.getAllComments();

  comment = {
    date: null,
    message: ''
  };

  constructor(private serv: BindingService) { }

  ngOnInit() {
  }

  addComment(){
    if (this.comment.message !== ''){
      this.serv.addComment({message: this.comment.message});
      this.comments = this.serv.getAllComments();
      this.comment.message = '';
    }
  }
}