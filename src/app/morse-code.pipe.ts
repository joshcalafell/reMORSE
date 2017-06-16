import { Pipe, PipeTransform } from '@angular/core';
import { PHONETICS } from './constants/phonetics';
import { findIndex } from 'lodash';

@Pipe({ name: 'morse' })
export class MorseCodePipe implements PipeTransform {
  transform(word:string):string {
    let w = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let translation = '';
    for (var i = 0; i < word.length; i++) {
      let character = word[i];
      let index = findIndex(PHONETICS, { character });
      let morse = PHONETICS[index].morse;
      translation += `[${morse}]`;
    }
    return translation;
  }
}
