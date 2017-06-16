import { Injectable } from '@angular/core';
import { Phonetic } from '../models/phonetic';
import { PHONETICS } from '../constants/phonetics';

import { findIndex } from 'lodash';


@Injectable()
export class PhoneticService {
  constructor() { }

  getPhonetics(): Promise<Phonetic[]> {
    return Promise.resolve(PHONETICS);
  }

}
