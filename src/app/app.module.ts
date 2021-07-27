import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlayerComponent } from './pages/player/player.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
