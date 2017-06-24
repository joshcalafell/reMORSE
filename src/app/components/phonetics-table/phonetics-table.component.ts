import { Component, OnInit } from '@angular/core';
import { Phonetic } from '../../models/phonetic';
import { PhoneticService } from '../../services/phonetic.service';

@Component({
  selector: 'app-phonetics-table',
  templateUrl: './phonetics-table.component.html',
  styleUrls: ['./phonetics-table.component.scss']
})
export class PhoneticsTableComponent implements OnInit {
  title = 'Morse Code & Phonetics Translator';
  phonetics: Phonetic[];
  
  constructor(private phoneticService: PhoneticService) { }

  ngOnInit(): void {
    this.getPhonetics();
  }

  public getPhonetics(): void {
    this.phoneticService.getPhonetics()
      .then(phonetics => this.phonetics = phonetics);
  }

}
