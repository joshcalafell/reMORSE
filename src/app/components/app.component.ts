import { Component, OnInit } from '@angular/core';
import { Phonetic } from '../models/phonetic';
import { PhoneticService } from '../services/phonetic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Morse Code & Phonetics Translator';
  phonetics: Phonetic[];

  constructor(private phoneticService: PhoneticService) { }

  ngOnInit(): void {
    this.getPhonetics();
  }

  getPhonetics(): void {
    this.phoneticService.getPhonetics()
      .then(phonetics => this.phonetics = phonetics);
  }
}
