import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { StarComponent } from './components';



@NgModule({
  declarations: [
    TopNavbarComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavbarComponent,
    StarComponent
  ]
})
export class SharedModule { }
