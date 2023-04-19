import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { Concert } from 'src/assets/Concert';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  unfilteredList: Concert[];
  filteredList: Concert[];

  constructor(private concertService: ConcertsService,private changeDetectorRef: ChangeDetectorRef) {
    this.unfilteredList=[];
    this.filteredList = [];
  }

  ngOnInit(): void {
    this.concertService.getListConcert().subscribe((data) => {
      this.unfilteredList =  data;
      this.filteredList = data;
      console.log(data);
      console.log(this.unfilteredList);
      console.log(this.filteredList);

    });
  }

   filtrarLista(filter: any) {
    this.concertService.getListConcertFiltered(filter).subscribe(data=>{
      this.filteredList = data;
      this.changeDetectorRef.detectChanges();

    });
  }
  
   
}
