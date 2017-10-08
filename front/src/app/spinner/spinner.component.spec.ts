import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { counterReducer, AppState, SHOW } from './../visibleReducer';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

function crearObservable(retorno){
  return Observable.create(function (observer) {
    observer.next(retorno);
    observer.complete();
  })
}

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let store: Store<AppState>;
  let spyStore_Select: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ],
      imports: [
        StoreModule.provideStore({ counter: counterReducer }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check when spinner is on', () => {
    spyStore_Select = spyOn(store, 'select').and.returnValue(crearObservable(true));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(spyStore_Select.calls.first().args[0]).toBe('spinnerVisibility');
    expect(component.spinnerVisible).toBeTruthy();
    expect(compiled.querySelector("#dvLoading").hasAttribute('hidden')).toEqual(false);
  });

  it('check when spinner is off', () => {
    spyStore_Select = spyOn(store, 'select').and.returnValue(crearObservable(false));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(spyStore_Select.calls.first().args[0]).toBe('spinnerVisibility');
    expect(component.spinnerVisible).toBeFalsy();
    expect(compiled.querySelector("#dvLoading").hasAttribute('hidden')).toEqual(true);
  });

  describe('Check DOM elements', () => {
    it('check div dvLoading', async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("#dvLoading")).toBeTruthy();
    }));

    it('check div dvLoading', async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("#backgroundLoading")).toBeTruthy();
    }));
  });
});
