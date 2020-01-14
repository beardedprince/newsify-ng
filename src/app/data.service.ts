import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  posts: any[];

   getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getPosts() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ng&category=sport&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0');
  }

  getHealthPosts() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0');
  }

  getEducation() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=06008e50d7cf47e68f9c9d084b9ed5e0');
  }

  getPostByTitle(title: string) {
    this.getPosts().subscribe(data => {
      this.posts = data['articles'];
    });
    return this.posts.find(post => post.title === title);
  }

  getHealthPostByTitle(title: string) {
    this.getHealthPosts().subscribe(data => {
      this.posts = data['articles'];
    });
    return this.posts.find(post => post.title === title);
  }

  submitForm() {
    return console.log('atempting to submit the form');
  }

  readMore() {
    return console.log('i will get the post for you dont worry');
  }
}
