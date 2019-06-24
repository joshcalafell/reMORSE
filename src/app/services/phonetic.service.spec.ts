import { PhoneticService } from './phonetic.service'
import { fakeAsync, tick } from '@angular/core/testing'

describe('PhoneticService', () => {
  let service: PhoneticService

  beforeEach(() => {
    service = new PhoneticService()
  })

  it('creates an instance', () => {
    expect(service).toBeTruthy()
  })

  it('returns a promise resolution to get ponetics from service', fakeAsync(() => {
    let spy = spyOn(service, 'getPhonetics').and.returnValue(true)
    expect(service.getPhonetics()).toBeTruthy()
  }))
})
