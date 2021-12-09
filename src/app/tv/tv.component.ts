import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  fullTrendingTvShows:any = [];
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _TrendingService:TrendingService) { 
    _TrendingService.getTrending("tv").subscribe((data)=>{
      this.fullTrendingTvShows = data.results;
    })
  }

  ngOnInit(): void {
  }

}
