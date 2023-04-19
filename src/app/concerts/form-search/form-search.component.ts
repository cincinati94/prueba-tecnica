import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConcertsService } from '../concerts.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent {
  concertForm = new FormGroup({
    name: new FormControl(''),
    place: new FormControl(''),
    artist: new FormControl(''),
  });

  constructor(
    private concertService: ConcertsService,
    private listComponent: ListComponent
  ) {}

  submit() {
    const filter = {
      name: this.concertForm.get('name')?.value,
      artist: this.concertForm.get('artist')?.value,
      place: this.concertForm.get('place')?.value,
    };
    this.listComponent.filtrarLista(filter);
    console.log(filter);
  }
  clearFilters() {
    const filter = {
      name: '',
      artist: '',
      place: '',
    };
    this.concertForm.reset(filter);
    this.listComponent.filtrarLista(filter);
    console.log(filter);
  }
}
