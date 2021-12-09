import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrendingService } from '../trending.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SimilarService } from '../similar.service';





@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {


  id:any="";
  tvDetails:any = {};
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _Router:Router, private _TrendingService:TrendingService , private _SimilarService:SimilarService) { 
    this.id =  _ActivatedRoute.snapshot.params.id;
  
    this._Router.routeReuseStrategy.shouldReuseRoute =()=> false ;
   
   this._TrendingService.getTvDetailes(this.id).subscribe((response)=>{
    this.tvDetails = response;
   });

    _SimilarService.getSimilar("tv",this.id).subscribe((response)=>{
      this.similarTvShows = response.results;
   })
   
  }

  similarTvShows:any = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  
  }
 
  ngOnInit(): void {
  }

}
