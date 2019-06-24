import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './components/app.component'
import { LegendComponent } from './components/legend/legend.component'
import { TextAreaComponent } from './components/text-area/text-area.component'
import { TranslationTableComponent } from './components/translation-table/translation-table.component'
import { MorseCodePipe } from './pipes/morse-code.pipe'
import { MorseCodeService } from './services/morse-code.service'
import { PhoneticService } from './services/phonetic.service'

@NgModule({
  declarations: [
    MorseCodePipe,
    AppComponent,
    TextAreaComponent,
    LegendComponent,
    TranslationTableComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [PhoneticService, MorseCodeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
