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

  public updateText(words: string[]): void {
    this.words = words;
  }

  public shouldRender() {
    return this.words && this.words.length;
  }

}
