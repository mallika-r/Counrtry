import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from "src/app/core/country.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    CommonModule ,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
