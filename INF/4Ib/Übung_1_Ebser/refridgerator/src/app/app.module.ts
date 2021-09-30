import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';

@NgModule({
  declarations: [AppComponent, RefrigeratorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
