import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneticsTableComponent } from './phonetics-table.component';
import { PhoneticService } from '../../services/phonetic.service';

describe('PhoneticsTableComponent', () => {
  let component: PhoneticsTableComponent;
  let fixture: ComponentFixture<PhoneticsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneticsTableComponent ],
      providers: [PhoneticService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
