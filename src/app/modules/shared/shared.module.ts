import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BusyComponent } from './busy/busy.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BusyComponent,
    PlusButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BusyComponent,
    PlusButtonComponent
  ]
})
export class SharedModule { }
