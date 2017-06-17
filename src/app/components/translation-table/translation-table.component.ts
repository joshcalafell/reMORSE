import { Component, OnInit, Input } from '@angular/core';

import { Phonetic } from '../../models/phonetic';
import { PhoneticService } from '../../services/phonetic.service';

@Component({
  selector: 'app-translation-table',
  templateUrl: './translation-table.component.html',
  styleUrls: ['./translation-table.component.scss']
})
export class TranslationTableComponent implements OnInit {
  @Input() words: string[];
  @Input() shouldRender: boolean;

  constructor(private phoneticService: PhoneticService) { 

  }

  ngOnInit() {

  }

}
