import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const idRef = 'title';
    const title = this.route.snapshot.params[idRef];
    this.post = this.dataService.getPostByTitle(title);
    this.route.params.subscribe(params => {
      this.post = this.dataService.getPostByTitle(params[idRef]);
    });

    console.log(this.post);


    const id = 'title';
    const tile = this.route.snapshot.params[id];
    this.post = this.dataService.getHealthPostByTitle(tile);
    this.route.params.subscribe(params => {
      this.post = this.dataService.getHealthPostByTitle(params[id]);
    });

  }

}
