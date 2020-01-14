import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edupost: object;
  constructor(private data: DataService , private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Newsify - Education');
    this.meta.addTags([
      {name: 'title', content: 'Newsify' },
      {name: 'description', content: 'Newsify app feed bring news feed from different source to you'},
      {name: 'keywords', content: 'news, news feeds, feeds, daily news, sport news, health news, science and tech news'}
    ]);
    this.data.getEducation().subscribe(data => {
      this.edupost = data;
      console.log(this.edupost);
    });
    }

}
