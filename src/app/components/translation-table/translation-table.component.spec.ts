import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MorseCodePipe } from '../../pipes/morse-code.pipe';
import { TranslationTableComponent } from './translation-table.component';

describe('TranslationTableComponent', () => {
  let component: TranslationTableComponent;
  let fixture: ComponentFixture<TranslationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationTableComponent, MorseCodePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
