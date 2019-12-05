import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  posts: object;

  constructor(private data: DataService) { }

  ngOnInit() {
this.data.getHealthPosts().subscribe( data => {
this.posts = data;
console.log(this.posts);
});
  }

}
