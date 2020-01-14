import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  edupost: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEducation().subscribe(data => {
      this.edupost = data;
      console.log(this.edupost);
    });
    }

}
