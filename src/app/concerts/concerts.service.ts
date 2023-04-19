import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Concert } from 'src/assets/Concert';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  template: 'app.component',
})
@Injectable({
  providedIn: 'root',
})
export class ConcertsService {
  private apiUrl = './assets/data.json';
  items: any;
  searchItem: string;

  constructor(private http: HttpClient) {
    this.searchItem = '';
  }

  getListConcert(): Observable<Concert[]> {
    return this.http.get<Array<Concert>>(this.apiUrl);
  }
  getConcertById(id: number): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(
        map((data: any) =>
          Array.isArray(data)
            ? data.find((item) => item.id === id)
            : [data].find((item) => item.id === id)
        )
      );
  }
  getListConcertFiltered(filter: any): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.apiUrl).pipe(
      map((concerts) =>
        concerts.filter((concert) => {
          let emptyFilters =
            filter.name === '' && filter.artist === '' && filter.place === '';
          if (emptyFilters) {
            return true;
          } else {
            return (
              (filter.name !== '' &&
                concert.nombre
                  .toLowerCase()
                  .includes(filter.name.toLowerCase())) ||
              (filter.artist !== '' &&
                concert.artista
                  .toLowerCase()
                  .includes(filter.artist.toLowerCase())) ||
              (filter.place !== '' &&
                concert.lugar
                  .toLowerCase()
                  .includes(filter.place.toLowerCase()))
            );
          }
        })
      )
    );
  }
}
