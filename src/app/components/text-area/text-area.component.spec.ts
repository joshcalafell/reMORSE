import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('emits an event on input in text area', (done) => {
    let event = { target:{ value: 'sos'}};
    component.onTextUpdated.subscribe(e => {
      expect(e).not.toBeFalsy();
      expect(e).toEqual(event);
      done();
    });
    component.updateText(event);
  });

});