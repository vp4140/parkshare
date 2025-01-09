import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainTableComponent } from './main-table/main-table.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
// import { SideNavComponent } from './side-nav/side-nav.component';
// import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ParkSpaceComponent } from './park-space/park-space.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainTableComponent,
    // SideNavComponent,
    ParkSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule, MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
