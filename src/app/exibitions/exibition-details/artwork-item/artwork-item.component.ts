import { Component, Input, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Artwork } from 'src/app/model/artwork.model';
import { ArtworkDetailsComponent } from '../artwork-details/artwork-details.component';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css']
})
export class ArtworkItemComponent implements OnInit {

  @Input()
  artwork: Artwork = new Artwork();

  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {}

  showDetails(): void {
    const offcanvasRef = this.offcanvasService.open(ArtworkDetailsComponent, {
      position: 'end',
    });
    offcanvasRef.componentInstance.artwork = this.artwork;
  }

}
