import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data:any = {
    'name' : '',
    'email' : '',
    'gender' : '',
    'age' : '',
    'aadhar' : ''
  }
  add(value){
    this.data.name = value.name;
    this.data.email = value.email;
    this.data.gender = value.gender;
    this.data.age = value.age;
    this.data.aadhar = value.aadhar
  }
  
}
