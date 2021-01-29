import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent, StarComponent, FooterComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TopNavbarComponent,
    StarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent,
    StarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
