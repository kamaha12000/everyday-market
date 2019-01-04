import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { MarketModule } from './modules/market/market.module';
import { CoreModule } from './modules/core/core.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MarketModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
