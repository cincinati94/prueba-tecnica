import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './concerts/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconButton } from '@angular/material/button';import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsComponent } from './concerts/details/details.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { FormSearchComponent } from './concerts/form-search/form-search.component';
import {MatDividerModule} from '@angular/material/divider'

@NgModule({
  declarations: [AppComponent, ListComponent, DetailsComponent, NavComponent,FormSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
