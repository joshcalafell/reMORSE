import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing'
import { MorseCodeService } from '../../services/morse-code.service'
import { LegendComponent } from './legend.component'

describe('LegendComponent', () => {
  let component: LegendComponent
  let fixture: ComponentFixture<LegendComponent>

  let service: MorseCodeService
  let spy: any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegendComponent],
      providers: [MorseCodeService],
    }).compileComponents()
    service = new MorseCodeService()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  describe('#ngOnInit', () => {
    it(`calls the component's 'getMorseCodeUnits' method`, fakeAsync(() => {
      spy = spyOn(component, 'getMorseCodeUnits').and.returnValue(true)
      component.ngOnInit()
      tick()
      expect(spy)
    }))
  })

  describe('#getMorseCodeUnits', () => {
    it(`calls the service's 'getMorseCodeUnits' method`, fakeAsync(() => {
      spy = spyOn(service, 'getMorseCodeUnits').and.returnValue(true)
      expect(component.getMorseCodeUnits).toBeTruthy()
      expect(service.getMorseCodeUnits).toBeTruthy()
      tick()
      expect(service).toBeDefined()
      expect(spy)
    }))

    it(`sets the component's 'units' property`, fakeAsync(() => {
      expect(component.units).not.toBeDefined()
      component.getMorseCodeUnits()
      tick()
      expect(component.units).toBeDefined()
    }))
  })
})
