import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librarytest';
  length= 20
//pagination items 
  totalRecords= 100

  nextPage(){
    console.log('next page')
  }
}
