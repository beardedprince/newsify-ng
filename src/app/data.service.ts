import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

   getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getPosts() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ng&category=sport&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0');
  }


  firstClick() {
    return console.log('works');
  }

  myMethod() {
    return console.log('education button is clicked');
  }

  submitForm() {
    return console.log('atempting to submit the form');
  }

  readMore() {
    return console.log('i will get the post for you dont worry');
  }
}
