import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  fullTrendingMovies:any = [];
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;
  
  constructor(private _TrendingService:TrendingService ) {
    _TrendingService.getTrending("movie").subscribe((data)=>{
      this.fullTrendingMovies = data.results;
    });

   }

  

  ngOnInit(): void {
  }

}
