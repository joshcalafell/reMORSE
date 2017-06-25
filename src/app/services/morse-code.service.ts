import { Injectable } from '@angular/core';
import { MORSE_CODE_UNITS } from '../constants/morse-code-units';
import { MorseCodeUnits } from '../models/morse-code';

@Injectable()
export class MorseCodeService {

  constructor() { }

  getMorseCodeUnits(): Promise<MorseCodeUnits> {
    return Promise.resolve(MORSE_CODE_UNITS);
  }

}
