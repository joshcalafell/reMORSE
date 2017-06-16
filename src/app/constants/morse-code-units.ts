interface SpaceUnits {
  'between_same_letter': number;
  'between_letters': number;
  'between_words': number;
}

interface MorseUnits {
  'dot': number;
  'dash': number;
  'space': SpaceUnits
}

export const MORSE_CODE_UNITS = <MorseUnits>{
  'dot': 1,
  'dash': 3,
  'space': {
    'between_same_letter': 1,
    'between_letters': 3,
    'between_words': 7
  }
}