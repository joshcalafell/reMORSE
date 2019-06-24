import { MorseCodeUnits } from '../models/morse-code'

export const MORSE_CODE_UNITS = <MorseCodeUnits>{
  dot: 1,
  dash: 3,
  space: {
    between_same_letter: 1,
    between_letters: 3,
    between_words: 7,
  },
}
