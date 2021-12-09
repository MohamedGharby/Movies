import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  id:string="";
  peopleDetails:any = {};
  mainPoster:string=`https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute:ActivatedRoute , private _TrendingService:TrendingService) { 
   this.id = _ActivatedRoute.snapshot.params.id;
   this._TrendingService.getPeopleDetailes(this.id).subscribe((response)=>{
    this.peopleDetails = response;
   })
  }

  ngOnInit(): void {
  }

}
