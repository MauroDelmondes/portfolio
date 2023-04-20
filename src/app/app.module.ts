import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { CarouselModule } from '@coreui/angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { WorksComponent } from './components/works/works.component';
import { WorkCardComponent } from './components/work-card/work-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    CarouselComponent,
    ExperienceComponent,
    ExpansionPanelComponent,
    WorksComponent,
    WorkCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    CarouselModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
