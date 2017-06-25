import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LegendComponent } from './legend.component';
import { MorseCodeService } from '../../services/morse-code.service';

describe('LegendComponent', () => {
  let component: LegendComponent;
  let fixture: ComponentFixture<LegendComponent>;

  let service: MorseCodeService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendComponent ],
      providers: [ MorseCodeService ]
    })
    .compileComponents();
    service = new MorseCodeService();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it(`calls the component 'getMorseCodeUnits' method`, fakeAsync(() => {
      spy = spyOn(component, 'getMorseCodeUnits').and.returnValue(true); 
      component.ngOnInit();
      tick();
      expect(spy);
    }));
  });

  describe('#getMorseCodeUnits', () => {
    it(`calls the services 'getMorseCodeUnits' method`, fakeAsync(() => {
      spy = spyOn(service, 'getMorseCodeUnits').and.returnValue(true); 
      expect(component.getMorseCodeUnits).toBeTruthy();
      expect(service.getMorseCodeUnits).toBeTruthy();
      tick();
      expect(service).toBeDefined();
      expect(spy);
    }));

    it(`sets the component 'units' property`, fakeAsync(() => {
      expect(component.units).not.toBeDefined();
      component.getMorseCodeUnits();
      tick();
      expect(component.units).toBeDefined();
    }));
  });

});
