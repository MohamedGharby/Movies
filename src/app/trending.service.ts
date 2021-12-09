import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

   

  getTrending(sortOfTrend:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${sortOfTrend}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  getMovieDetailes(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  getTvDetailes(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
  getPeopleDetailes(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
}
