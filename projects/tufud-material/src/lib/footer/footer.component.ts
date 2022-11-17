import { Component } from '@angular/core';

@Component({
  selector: 'tf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  imgSource = {
    linkedinSrc:'../src/assets/linkedin.svg',
    twitterSrc:'../src/assets/twitter.svg',
    instagramSrc:'../src/assets/instagram.svg'
  }
}
