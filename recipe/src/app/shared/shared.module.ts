import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TopNavbarComponent, StarComponent, FooterComponent } from './components';
import { CardComponent } from './components';
import { CardSimpleComponent } from './components';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';


@NgModule({
  declarations: [
    TopNavbarComponent,
    StarComponent,
    CardComponent,
    CardSimpleComponent,
    FooterComponent,
    ModalConfirmComponent
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
    FooterComponent,
    ModalConfirmComponent,
    RouterModule
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
