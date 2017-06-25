import { Component, OnInit } from '@angular/core';
import { MorseCodeService } from '../../services/morse-code.service';
import { MorseCodeUnits } from '../../models/morse-code';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  units: MorseCodeUnits;

  constructor(private morseCodeService: MorseCodeService) { }

  ngOnInit(): void {
    this.getMorseCodeUnits();
  }

  public getMorseCodeUnits(): void {
    this.morseCodeService.getMorseCodeUnits()
      .then(units => this.units = units);
  }

}
