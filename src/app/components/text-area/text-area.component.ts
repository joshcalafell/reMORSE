import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Output() onTextUpdated: EventEmitter<any> = new EventEmitter<any>()

  public updateText(event: any): void {
    this.onTextUpdated.emit(event)
  }
}
