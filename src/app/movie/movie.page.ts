import { Component, OnInit } from '@angular/core';

// add movie service
import { OmdbService } from '../services/omdb.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: string = '';

  constructor(private movieService: OmdbService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }
}
