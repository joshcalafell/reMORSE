import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { PhoneticService } from './services/phonetic.service';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { MorseCodePipe } from './morse-code.pipe';
import { PhoneticsTableComponent } from './components/phonetics-table/phonetics-table.component';
import { LegendComponent } from './components/legend/legend.component';
import { TranslationTableComponent } from './components/translation-table/translation-table.component';

@NgModule({
  declarations: [
    MorseCodePipe,
    AppComponent,
    TextAreaComponent,
    PhoneticsTableComponent,
    LegendComponent,
    TranslationTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PhoneticService, MorseCodePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


