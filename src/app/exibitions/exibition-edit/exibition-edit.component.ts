import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Artwork } from 'src/app/model/artwork.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-edit',
  templateUrl: './exibition-edit.component.html',
  styleUrls: ['./exibition-edit.component.css']
})
export class ExibitionEditComponent implements OnInit {

  @Input()
  freeArtworks: Artwork[] = [];

  @Input()
  exibitionArtworks: Artwork[] = [];

  @Input()
  exibitionId: number = 0;

  @Output()
  doneClicked: EventEmitter<void> = new EventEmitter()

  @Output()
  artworksChanged: EventEmitter<void> = new EventEmitter();

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  authorControl =  new FormControl('');


  constructor(private service: ExibitionService) { }

  ngOnInit(): void {
  }

  onDoneClicked(): void {
    this.doneClicked.emit()
  }

  onAddClicked(artwork: Artwork): void {
    this.service.addArtwork(this.exibitionId, artwork._id, artwork).subscribe({
      next: (artwork: Artwork) => {
        this.artworksChanged.emit()
      },
      error: (err) => { console.log(err) }
    })
  }

  onRemoveClicked(artworkId: number): void {
    this.service.removeArtwork(this.exibitionId, artworkId).subscribe({
      next: (artwork: Artwork) => {
        this.artworksChanged.emit()

      },
      error: (err) => { console.log(err) }
    })
  }

  onSearchClick(): void {
    this.search.emit(this.authorControl.value || '');
  }

}
