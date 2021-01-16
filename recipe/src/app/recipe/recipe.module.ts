import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './containers/home';
import { DetailComponent } from './containers/detail';
import { NewComponent } from './containers/new';
import { CardComponent } from './components/list/card/card.component';
import { SectionComponent } from './components/list/section/section.component';
import { RecipeFacade } from './recipe.facade';
import { RecipeAPI } from './api/recipe.api';
import { WelcomeComponent } from './components/list/welcome/welcome.component';
import { CategoriesComponent } from './components/list/categories/categories.component';
import { StarComponent } from './components/list/star';
import { BadgeComponent } from './components/list/badge/badge.component';
import { CardSimpleComponent } from './components/list/card-simple/card-simple.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './containers/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    NewComponent,
    CardComponent,
    SectionComponent,
    WelcomeComponent,
    CategoriesComponent,
    StarComponent,
    BadgeComponent,
    CardSimpleComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    RecipeFacade,
    RecipeAPI
  ]
})
export class RecipeModule { }
