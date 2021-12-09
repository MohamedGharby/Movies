import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {  RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { SimilarComponent } from './similar/similar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvComponent,
    NetworkComponent,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent,
    PeopleComponent,
    HomeHeaderComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    PeopleDetailsComponent,
    SimilarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
