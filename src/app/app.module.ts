import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { MarketModule } from './modules/market/market.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MarketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
