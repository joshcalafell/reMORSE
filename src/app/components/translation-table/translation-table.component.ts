import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-translation-table',
  templateUrl: './translation-table.component.html',
  styleUrls: ['./translation-table.component.scss']
})
export class TranslationTableComponent implements OnInit {
  @Input() words: string[];
  @Input() shouldRender: boolean;
  
  constructor() { }

  ngOnInit() { }

}
