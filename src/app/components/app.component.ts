import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Morse Code & Phonetics Translator';
  words:string[] = [];
  
  constructor() { }

  ngOnInit(): void { }

  public updateText(event): void {
    this.words = this.getTextArray(event.target.value);
  }

  public getTextArray(text:string): string[] {
    return text.match(/\b(\w+)\b/g) || [];
  }

}
