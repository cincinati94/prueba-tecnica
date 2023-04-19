import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ConcertsService } from './concerts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSearchComponent } from './form-search/form-search.component';



@NgModule({
  declarations: [
  ListComponent,
  FormSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    ConcertsService,
    ListComponent
  ],
  exports: [ListComponent]

})
export class ConcertsModule { }
