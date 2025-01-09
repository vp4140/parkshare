import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parkshare';
  @ViewChild('drawer') drawer: ElementRef | undefined;
  showFiller = false;
  toggleBurger(drawer:any){
    drawer.toggle();  
  }
}
