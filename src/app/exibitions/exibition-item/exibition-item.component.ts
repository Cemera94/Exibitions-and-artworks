import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css']
})
export class ExibitionItemComponent implements OnInit {

  @Input()
  showEditButton = false;

  @Input()
  exibition: Exibition = new Exibition();

  @Output()
  editClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(): void {
    this.editClicked.emit()
  }

}
