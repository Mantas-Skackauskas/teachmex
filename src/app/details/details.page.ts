import { OmdbService } from './../services/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 
  info = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: OmdbService) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe(result => {
      this.info = result;
    });
  }
 
  openWeb() {
    window.open(this.info.Website, '_blank');
  }
}