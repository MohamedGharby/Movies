import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  fullTrendingPeople:any = [];
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _TrendingService:TrendingService) { 
  
    _TrendingService.getTrending("person").subscribe((data)=>{
      this.fullTrendingPeople = data.results;
    })
  }
  ngOnInit(): void {
  }

}
