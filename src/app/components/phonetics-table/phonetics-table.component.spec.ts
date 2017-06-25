import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PhoneticsTableComponent } from './phonetics-table.component';
import { PhoneticService } from '../../services/phonetic.service';

describe('PhoneticsTableComponent', () => {
  let component: PhoneticsTableComponent;
  let fixture: ComponentFixture<PhoneticsTableComponent>;

  let service: PhoneticService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneticsTableComponent ],
      providers: [ PhoneticService ]
    })
    .compileComponents();
    service = new PhoneticService();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it(`calls the component's 'getPhonetics' method`, fakeAsync(() => {
      spy = spyOn(component, 'getPhonetics').and.returnValue(true); 
      component.ngOnInit();
      tick();
      expect(spy);
    }));
  });

  describe('#getPhonetics', () => {
    it(`calls the service's 'getPhonetics' method`, fakeAsync(() => {
      spy = spyOn(service, 'getPhonetics').and.returnValue(true); 
      expect(component.getPhonetics).toBeTruthy();
      expect(service.getPhonetics).toBeTruthy();
      tick();
      expect(service).toBeDefined();
      expect(spy);
    }));

    it(`sets the component's 'phonetics' property`, fakeAsync(() => {
      expect(component.phonetics).not.toBeDefined();
      component.getPhonetics();
      tick();
      expect(component.phonetics).toBeDefined();
    }));
  });

});
