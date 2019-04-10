import { Injectable } from '@angular/core';

//add http module
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import map
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// omdb service to enable the api for the movies
export class OmdbService {

  // need these to connect to api
  url = 'http://www.omdbapi.com/';
  key = 'e4ad7cde';

  constructor(private http: HttpClient) {}
  
  searchData(title: string, type: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.key}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.key}`);
  }
}