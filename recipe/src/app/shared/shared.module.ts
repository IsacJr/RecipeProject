import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent, StarComponent, FooterComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopNavbarComponent,
    StarComponent,
    CardComponent,
    CardSimpleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent,
    StarComponent,
    CardComponent,
    CardSimpleComponent,
    FooterComponent
  ]
})
export class SharedModule { }
