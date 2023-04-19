import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './concerts/details/details.component';
import { ListComponent } from './concerts/list/list.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'details/:id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
