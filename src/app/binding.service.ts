import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BindingService {

  comments = [];

  constructor() { }

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }
}
