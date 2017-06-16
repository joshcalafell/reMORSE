import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  
  words = [];

  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) { // without type info
    let { value } = event.target;
    this.words = value.split(' ');
  }

}
