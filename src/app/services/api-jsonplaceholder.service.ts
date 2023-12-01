import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJSONplaceholderService {

  constructor(private http:HttpClient) { }

    baseurl = 'https://jsonplaceholder.typicode.com/';

    trendingMovieApiData():Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
}
