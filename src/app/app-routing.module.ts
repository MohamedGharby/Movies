import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';

import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},

  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'about',canActivate:[AuthGuard], component:AboutComponent},
  {path:'network',canActivate:[AuthGuard], component:NetworkComponent},
  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent},
  {path:'tv' , canActivate:[AuthGuard],component:TvComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'people',canActivate:[AuthGuard], component:PeopleComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard], component:MovieDetailsComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard], component:TvDetailsComponent},
  

  {path:'peopledetails/:id',canActivate:[AuthGuard], component:PeopleDetailsComponent},


  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
