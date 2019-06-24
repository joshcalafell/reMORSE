import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { MorseCodePipe } from '../pipes/morse-code.pipe'
import { AppComponent } from './app.component'
import { TextAreaComponent } from './text-area/text-area.component'
import { LegendComponent } from './legend/legend.component'
import { TranslationTableComponent } from './translation-table/translation-table.component'
import { PhoneticService } from '../services/phonetic.service'
import { MorseCodeService } from '../services/morse-code.service'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  const title = 'Morse Code Translator'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MorseCodePipe,
        AppComponent,
        TextAreaComponent,
        LegendComponent,
        TranslationTableComponent,
      ],
      providers: [PhoneticService, MorseCodeService],
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'Morse Code Translator'`, async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual(title)
  }))

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain(title)
  }))

  describe('#updateText', () => {
    let event = { target: { value: 'sos sos' } }
    let expected = ['sos', 'sos']
    it(`sets the component's words' property`, () => {
      component.updateText(event)
      expect(component.words).toEqual(expected)
    })
  })

  describe('#getTextArray', () => {
    let text = 'sos abc 123'
    let expected = ['sos', 'abc', '123']
    it('returns an array of words split by spaces', () => {
      expect(component.getTextArray(text)).toEqual(expected)
    })
  })
})
