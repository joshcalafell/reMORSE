import { MorseCodePipe } from './morse-code.pipe'

describe('MorseCodePipe', () => {
  it('create an instance', () => {
    const pipe = new MorseCodePipe()
    expect(pipe).toBeTruthy()
  })

  it(`transforms 'sos' to '[●●●][———][●●●] as expected'`, () => {
    const pipe = new MorseCodePipe()
    expect(pipe.transform('sos')).toEqual('[●●●][———][●●●]')
  })
})
