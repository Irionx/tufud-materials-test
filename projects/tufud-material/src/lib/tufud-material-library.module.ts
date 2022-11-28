import { NgModule } from '@angular/core';
import { MinusPlusComponent } from './minus-plus/minus-plus.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { PaginationComponent } from './pagination/pagination.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { StatusComponent } from './status/status.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    PaginationComponent,
    MinusPlusComponent,
    HeaderComponent,
    TableLayoutComponent,
    StatusComponent
],
  imports: [  MatBadgeModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule, MatButtonModule, CommonModule],
  exports: [
    FooterComponent,
    PaginationComponent,
    MinusPlusComponent,
    HeaderComponent,
    TableLayoutComponent,
    StatusComponent
  ],
})
export class TufudMaterialLibraryModule {}