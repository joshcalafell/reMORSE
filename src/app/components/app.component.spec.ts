import { TestBed, async } from '@angular/core/testing';
import { MorseCodePipe }  from '../morse-code.pipe';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { PhoneticsTableComponent } from './phonetics-table/phonetics-table.component';
import { LegendComponent } from './legend/legend.component';
import { TranslationTableComponent } from './translation-table/translation-table.component';
import { PhoneticService } from '../services/phonetic.service';


describe('AppComponent', () => {
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
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Morse Code & Phonetics Translator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Morse Code & Phonetics Translator');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Morse Code & Phonetics Translator');
  }));

  
});
