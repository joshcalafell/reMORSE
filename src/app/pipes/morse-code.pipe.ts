import { Pipe, PipeTransform } from '@angular/core';
import { PHONETICS } from '../constants/phonetics';
import { find } from 'lodash';

@Pipe({ name: 'morseCode' })
export class MorseCodePipe implements PipeTransform {
  transform(word: string): string {
    return word.replace(/[^a-z0-9]/gi, '')
      .toLowerCase()
      .split('')
      .map(c => `[${ find(PHONETICS, { character: c }).morse }]`)
      .join('') || '';
  }
}
