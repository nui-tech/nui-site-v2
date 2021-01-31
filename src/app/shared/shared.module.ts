import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SafeHtmlPipe } from './safe-html';
// 3rd party modules
// import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SafeHtmlPipe
  ],
  providers: [
  ],
  entryComponents: [

  ],
  declarations: [
    SafeHtmlPipe
    ]
})
export class SharedModule { }
