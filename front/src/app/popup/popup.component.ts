import { Component, Inject } from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {

  constructor(public dialogRef: MdDialogRef<PopupComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) { }

  closePopup(): void {
    this.dialogRef.close();
  }
}
