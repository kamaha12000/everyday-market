import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BusyComponent } from './busy/busy.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BusyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BusyComponent
  ]
})
export class SharedModule { }
