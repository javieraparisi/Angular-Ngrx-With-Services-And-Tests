import { Component, Input } from '@angular/core';
import { Phone } from '../models/phone';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PopupComponent } from './../popup/popup.component';

@Component({
  selector: 'phone-detail-component',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  @Input() phone: Phone;
  constructor(private dialog:MdDialog) { }

  openDialog() {
    this.dialog.open(PopupComponent,{
      data: this.phone
    });
  }

}
