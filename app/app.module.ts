import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ DoughnutChartComponent, 
   PieChartComponent, 
   BarChartComponent,AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
