import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SimilarService {


constructor(private _HttpClient:HttpClient) { }

getSimilar(mediaType:string , id:string):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)
}



}
