import { Component, OnInit } from '@angular/core'
import { MorseCodeUnits } from '../../models/morse-code'
import { MorseCodeService } from '../../services/morse-code.service'

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent implements OnInit {
  units: MorseCodeUnits

  constructor(private morseCodeService: MorseCodeService) {}

  ngOnInit(): void {
    this.getMorseCodeUnits()
  }

  public getMorseCodeUnits(): void {
    this.morseCodeService
      .getMorseCodeUnits()
      .then(units => (this.units = units))
  }
}
