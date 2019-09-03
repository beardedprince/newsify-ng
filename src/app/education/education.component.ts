import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  myMethod() {
    this.data.myMethod();
  }

}
