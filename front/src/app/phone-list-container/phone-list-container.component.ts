import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Phone } from '../models/phone';
import { SHOW, HIDE, AppState } from './../visibleReducer';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'phone-list-container',
  templateUrl: './phone-list-container.component.html',
  providers: [PhonesService]
})
export class PhoneListContainerComponent implements OnInit {
  phones: Phone[];

  constructor(private service: PhonesService , private store: Store<AppState>) { }

  ngOnInit() {
    const self = this;
    this.store.dispatch({ type: SHOW });

    this.service.getPhones().subscribe(function(phones){
      self.phones = phones;
      self.store.dispatch({ type: HIDE });
    });
  }
}
