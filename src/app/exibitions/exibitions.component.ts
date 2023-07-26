import { Component, OnInit } from '@angular/core';
import { Exibition } from '../model/exibition.model';
import { ExibitionService } from '../services/exibition.service';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css']
})
export class ExibitionsComponent implements OnInit {

  exibitions: Exibition[] = [];

  constructor(private service: ExibitionService) { }

  ngOnInit(): void {
    this.service.getExibitions().subscribe({
      next: (exibitions: Exibition[]) => {
        this.exibitions = exibitions
      },
      error: (err: any) => { console.log(err) }
    })
  }

}
