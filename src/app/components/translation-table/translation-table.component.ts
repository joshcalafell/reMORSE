import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-translation-table',
  templateUrl: './translation-table.component.html',
  styleUrls: ['./translation-table.component.scss']
})
export class TranslationTableComponent {
  @Input() words: string[];
  @Input() shouldRenderTranslation: boolean;

}
