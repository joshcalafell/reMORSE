import { Pipe, PipeTransform } from '@angular/core';
import { PHONETICS } from './constants/phonetics';
import { findIndex } from 'lodash';

@Pipe({ name: 'morse' })
export class MorseCodePipe implements PipeTransform {
  transform(word:string):string {
    const letters = word.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');
    let translation = '';
    for(let letter in letters) {
      const character = letters[letter];
      const index = findIndex(PHONETICS, { character });
      const morse = PHONETICS[index].morse;
      translation += `[${morse}]`;
    }
    return translation;
  }
}
