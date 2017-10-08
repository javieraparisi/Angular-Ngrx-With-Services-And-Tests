import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer } from './visibleReducer';
import { SpinnerComponent } from './spinner/spinner.component';
import { PhoneDetailComponent } from './phone-detail-component/phone-detail.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    SpinnerComponent,
    PhoneDetailComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore({ spinnerVisibility: counterReducer }),
    MdDialogModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule { }
