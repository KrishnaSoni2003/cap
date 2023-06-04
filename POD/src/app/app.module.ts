import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainPageComponent } from './main-page/main-page.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { PodcastsCardsComponent } from './podcasts-cards/podcasts-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiscoverComponent } from './discover/discover.component';
import { BrowseComponent } from './browse/browse.component';
import { HostsComponent } from './hosts/hosts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    PodcastsCardsComponent,
    NavbarComponent,
    DiscoverComponent,
    BrowseComponent,
    HostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CarouselModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
