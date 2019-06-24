import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'M●rse C●de Translat●r'
  words: string[] = []

  public updateText(event: any): void {
    this.words = this.getTextArray(event.target.value)
  }

  public getTextArray(text: string): string[] {
    return text.match(/\b(\w+)\b/g) || []
  }
}
