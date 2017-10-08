import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../visibleReducer';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  spinnerVisible: boolean;

  ngOnInit() {
    const self = this;
    this.store.select('spinnerVisibility').subscribe(visibleRX => {
      if (visibleRX === true){
        this.spinnerVisible = true;
      } else {
        this.spinnerVisible = false;
      }
    });
  }

}
