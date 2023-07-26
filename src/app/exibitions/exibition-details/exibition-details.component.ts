import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artwork } from 'src/app/model/artwork.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-details',
  templateUrl: './exibition-details.component.html',
  styleUrls: ['./exibition-details.component.css']
})
export class ExibitionDetailsComponent implements OnInit {

  exibitionId: number = 0;
  exibition: Exibition = new Exibition();

  artworks: Artwork[] = [];
  allArtworks: Artwork[] = [];
  freeArtworks: Artwork[] = [];

  edit = false;

  params = {
    sort: 'author',
    sortDirection: 'asc',
    filter: {
      author: '',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private service: ExibitionService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id']
      this.getExibition();
      this.getArtworks();
      this.getAllArtworks();
    })
  }

  getExibition(): void {
    this.service.getExibition(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        this. exibition = exibition
      },
      error: (err) => {console.log(err)}
    })
  }

  getArtworks(): void {
    this.service.getArtworks(this.exibitionId).subscribe({
      next: (artworks: Artwork[]) => {
        this.artworks = artworks
      },
      error: (err) => {console.log(err)}
    })
  }

  getAllArtworks(): void {
    this.service.getAllArtworks(this.params).subscribe({
      next: (artworks: Artwork[]) => {
        this.allArtworks = artworks
        console.log(this.allArtworks)
        this.freeArtworks = []

        for (let art of this.allArtworks) {
          if (art.exibition_id == -1) {
            this.freeArtworks.push(art);
          }
        }
      },
      error: (err) => {console.log(err)}
    })
  }

  onEditClicked(): void {
    this.edit = true;
  }

  onDoneClicked(): void {
    this.edit = false;
  }

  onArtworksChanged(): void {
    this.getArtworks();
    this.getAllArtworks();
  }


  onSearch(author: string): void {
    this.params.filter.author = author;
    console.log(author);
    this.getAllArtworks();
  }

}
