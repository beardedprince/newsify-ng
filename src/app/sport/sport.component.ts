import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  posts: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
