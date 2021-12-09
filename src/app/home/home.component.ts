import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

trendingMovies:any[]=[];
trendingTv:any[]=[];
trendingPeople:any[]=[];


  constructor(private _TrendingService:TrendingService) {

    this._TrendingService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies = data.results.slice(0,10)
    })
    this._TrendingService.getTrending('tv').subscribe((data)=>{
      this.trendingTv = data.results.slice(0,10)
    })
    this._TrendingService.getTrending('person').subscribe((data)=>{
      this.trendingPeople = data.results.slice(0,10)
    })
   }

   mainPoster:string=`https://image.tmdb.org/t/p/w500`

  ngOnInit(): void {
  }

}
