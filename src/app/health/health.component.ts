import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  posts: object;

  constructor(private data: DataService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Newsify - Health');
    this.meta.addTags([
      {name: 'title', content: 'Newsify' },
      {name: 'description', content: 'Newsify app feed bring news feed from different source to you'},
      {name: 'keywords', content: 'news, news feeds, feeds, daily news, sport news, health news, science and tech news'}
    ]);
    this.data.getHealthPosts().subscribe( data => {
this.posts = data;
console.log(this.posts);
});
  }

}
