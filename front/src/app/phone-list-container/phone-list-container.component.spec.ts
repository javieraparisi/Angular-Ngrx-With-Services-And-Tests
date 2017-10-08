import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { PhoneListContainerComponent } from './phone-list-container.component';

import { HttpModule } from '@angular/http';
import { counterReducer, AppState, SHOW } from './../visibleReducer';
import { StoreModule, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Phone } from '../models/phone';
import { PhonesService } from '../services/phones.service'

//mocks ***************************************************************************************************************
//mock sub component
@Component({
  selector: 'phone-detail-component',
  template: '<h1></h1>'
})
class PhoneDetailComponent {
  @Input() phone: Phone;
  constructor() { }
}

//mock PhonesService
class PhonesMockService {
  constructor() { }
  getPhones(): Observable<Phone[]> {
    let mockPhone = new Phone();
    mockPhone.id=1;
    mockPhone.model="S1";
    return Observable.create(function (observer) {
      observer.next([mockPhone]);
      observer.complete();
    });
  }
}

//tests ***************************************************************************************************************

describe('PhoneListContainerComponent', () => {
  let component: PhoneListContainerComponent;
  let fixture: ComponentFixture<PhoneListContainerComponent>;
  let store: Store<AppState>;
  let phonesService: PhonesService;
  let spyStore_Dispatch: jasmine.Spy;
  let spyService_getPhones: jasmine.Spy;
  let phonesMockService = new PhonesMockService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListContainerComponent,PhoneDetailComponent ],
      imports: [
        HttpModule,
        StoreModule.provideStore({ counter: counterReducer }),
      ],
      providers: [PhonesMockService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListContainerComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    phonesService = fixture.debugElement.injector.get(PhonesService);
    spyService_getPhones = spyOn(phonesService, 'getPhones').and.returnValue(phonesMockService.getPhones());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on Init', () => {
    it('check spinner visible on load', () => {
      spyStore_Dispatch = spyOn(store, 'dispatch');
      fixture.detectChanges();
      expect(spyStore_Dispatch.calls.first().args[0].type).toBe(SHOW);
    });

    describe('call to phone services', () => {
      it('check call to the service', () => {
        fixture.detectChanges();
        expect(spyService_getPhones.calls.any()).toBeTruthy();
      });
    });

    describe('when the phone services finish', () => {
      it('check my model', () => {
        fixture.detectChanges();
        expect(component.phones[0].id===1).toBeTruthy();
        expect(component.phones[0].model==="S1").toBeTruthy();
      });
    });

    describe('check dom', () => {
      it('check div galleries', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#galleries")).toBeTruthy();
      }));

      it('check header', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("header")).toBeTruthy();
      }));

      it('call to detail component', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("phone-detail-component")).toBeTruthy();
      }));
    });
  });
});
