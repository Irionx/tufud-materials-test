import { NgModule } from '@angular/core';
import { MinusPlusComponent } from './minus-plus/minus-plus.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MinusPlusComponent,
    HeaderComponent
],
  imports: [ BrowserAnimationsModule, RouterModule, MatBadgeModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule, CommonModule],
  exports: [
    MinusPlusComponent,
    HeaderComponent
  ],
})
export class TufudMaterialLibraryModule {}