import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MorseCodePipe }  from '../morse-code.pipe';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { PhoneticsTableComponent } from './phonetics-table/phonetics-table.component';
import { LegendComponent } from './legend/legend.component';
import { TranslationTableComponent } from './translation-table/translation-table.component';
import { PhoneticService } from '../services/phonetic.service';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const title = 'Morse Code & Phonetics Translator';
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MorseCodePipe,
        AppComponent,
        TextAreaComponent,
        PhoneticsTableComponent,
        LegendComponent,
        TranslationTableComponent
      ],
      providers: [MorseCodePipe, PhoneticService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Morse Code & Phonetics Translator'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));

  describe('#updateText', () => {
    let _event = { target: { value: 'sos sos' } }
    let expected = ['sos', 'sos'];

    it(`sets the 'words' component property`, () => {
      component.updateText(_event);
      expect(component.words).toEqual(expected);
    });

  });

  describe('#getTextArray', () => {
    let text = 'sos abc 123';
    let expected = ['sos', 'abc', '123'];

     it('should return an array of words', () => {
      expect(component.getTextArray(text)).toEqual(expected);
    });
  })
  
});
