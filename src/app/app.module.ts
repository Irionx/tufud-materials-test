import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TufudMaterialLibraryModule } from 'projects/tufud-material/src/public-api';


import { AppComponent } from './app.component';
import { TableComponent } from './components/test1/test1.component';

import { TestoComponent } from './components/testo/testo.component';


@NgModule({
  declarations: [
    AppComponent,
    TestoComponent,
    TableComponent
  ],
  imports: [
    HttpClientModule, // ?? a ver si fixea
    TufudMaterialLibraryModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
