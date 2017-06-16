import { MorseCodePipe } from './morse-code.pipe';

describe('MorseCodePipe', () => {
  it('create an instance', () => {
    const pipe = new MorseCodePipe();
    expect(pipe).toBeTruthy();
  });
});
