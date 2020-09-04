import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { MathhammerComponent } from './mathhammer/mathhammer.component';
import { MaterialModule } from './material-module';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MathhammerComponent,
    GraphComponent
  ],
  imports: [
    NgxChartsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
