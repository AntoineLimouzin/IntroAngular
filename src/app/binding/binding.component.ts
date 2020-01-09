import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  comments = [];

  comment = {
    date: null,
    message: ''
  };

  constructor() { }

  ngOnInit() {
  }

  addComment(){

    if (this.comment.message != '')
    {
      this.comment.date = new Date();
      this.comments.push({
        date: this.comment.date,
        message: this.comment.message
      });

      this.comment.message = '';
    }

  }

}
