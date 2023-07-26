import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {


  @Input()
  artwork: Artwork = new Artwork();
  
  constructor() {}

  ngOnInit(): void {}
  

}
