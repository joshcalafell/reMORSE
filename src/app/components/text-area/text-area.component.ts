import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  
  words:string[] = [];

  constructor() { }

  ngOnInit() { }

  onChange(event:any) {
    const { value } = event.target;
    this.words = value.match(/\b(\w+)\b/g) || [];
  }

  shouldRenderTranslation() {
    return this.words && this.words.length;
  }

}
