import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExibitionLocation } from 'src/app/model/exibition-location.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-new-exibition',
  templateUrl: './new-exibition.component.html',
  styleUrls: ['./new-exibition.component.css']
})
export class NewExibitionComponent implements OnInit {

  exibitionForm: FormGroup;

  locations: ExibitionLocation[] = [];

  constructor(
    private service: ExibitionService,
    private router: Router
    ) {
    this.exibitionForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      location: new FormControl(0)
    })
   }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.service.getLocations().subscribe({
      next: (locations: ExibitionLocation[]) => {
        this.locations = locations
      },
      error: (err: any) => { console.log(err) }
    })
  }

  onSubmit(): void {
    if (!this.exibitionForm.valid) {
      alert("Please fill in all fields")
      return
    }
    let locationId = this.exibitionForm.value.location

    let location: ExibitionLocation = new ExibitionLocation();
    let found = false;
    for (let loc of this.locations) {
      if (loc._id == locationId) {
        location = loc;
        found = true
      }
    }
    if (!found) {
      alert("Please choose a location")
      return
    }

    let newExibition = new Exibition({
      title: this.exibitionForm.value.title,
      description: this.exibitionForm.value.description,
      location: location
    })

    this.service.createExibition(newExibition).subscribe({
      next: (exibition: Exibition) => {
        console.log(exibition)
        this.router.navigate(['/exibitions'])
      },
      error: (err) => { console.log(err) }
    })
  }

}
