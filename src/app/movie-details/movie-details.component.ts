import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimilarService } from '../similar.service';
import { TrendingService } from '../trending.service';
Router




@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id:string = "";
  movieDetailes:any = {};
  similarMedia:any = {};
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute:ActivatedRoute,private  _Router:Router ,private  _TrendingService:TrendingService , private _SimilarService:SimilarService) { 
    this._Router.routeReuseStrategy.shouldReuseRoute =()=> false ;
   
   this.id = _ActivatedRoute.snapshot.params.id;

   this._TrendingService.getMovieDetailes(this.id).subscribe((response)=>{
      this.movieDetailes = response;
   });

   this._SimilarService.getSimilar("movie",this.id).subscribe((response)=>{
    this.similarMedia = response.results;
    
   })
   

  }

  ngOnInit(): void {
  }

}
