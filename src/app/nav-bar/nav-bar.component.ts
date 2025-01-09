import { Component, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showFiller = false;
  @Output() toggleBurger:any = new EventEmitter<any>();
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      () => alert('Link copied to clipboard!'),
      (err) => console.error('Failed to copy: ', err)
    );
  }
  toggleBurgerEvent() {
    console.log("here")
    this.toggleBurger.emit("Hello");
  }
  
  shareLink() {
    const shareData = {
      title: 'Check this out!',
      text: 'I found this amazing link for you.',
      url: 'https://vp4140.github.io/parkshare/home'
    };
  
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      this.copyToClipboard(shareData.url);
    }
  }
  
}
