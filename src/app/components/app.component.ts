import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Morse Code & Phonetics Translator';
  words:string[] = [];
  
  constructor() { 

  }

  ngOnInit(): void {

  }

  public updateText(event): void {
    let words = this.getTextArray(event.target.value);
    this.words = words;
  }

  getTextArray(text:string): string[] {
    return text.match(/\b(\w+)\b/g) || [];
  }

}
