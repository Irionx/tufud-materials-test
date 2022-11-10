import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = [{ name: 'Ordenes', route: 'orders'}]
  length= 20
//pagination items 
  totalRecords= 100
  
  constructor(public router: Router){}

  nextPage(){
    console.log('next page')
  }

  linkTo(event){
    console.log(event)
/*     this.router.navigate([event]) */
  }
}
