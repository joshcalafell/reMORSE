import { Pipe, PipeTransform } from '@angular/core';
import { PHONETICS } from '../constants/phonetics';
import { findIndex, forEach } from 'lodash';

@Pipe({ name: 'morseCode' })
export class MorseCodePipe implements PipeTransform {
  
  transform(word:string):string {
    const pattern = /[^a-z0-9]/gi;
    const letters = word.replace(pattern, '')
      .toLowerCase()
      .split('');

    let translation = '';

    forEach(letters, (character) => {
      const morse = PHONETICS[findIndex(PHONETICS, { character })].morse;
      translation += `[${morse}]`;
    });
    
    return translation;
  }
}
