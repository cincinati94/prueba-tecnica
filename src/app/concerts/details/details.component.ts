import { Component } from '@angular/core';
import { ConcertsService } from '../concerts.service';
import { ActivatedRoute } from '@angular/router';
import { Concert } from 'src/assets/Concert';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
itemSelected:any;

  constructor(private concertService: ConcertsService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const concertId = this.route.snapshot.paramMap.get('id') ?? '';
    this.concertService.getConcertById(parseInt(concertId))
  .subscribe(data => {
    console.log(data);
    this.itemSelected = data;
 })

}
}