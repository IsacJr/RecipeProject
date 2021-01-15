import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './containers/list';
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




@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    NewComponent,
    CardComponent,
    SectionComponent,
    WelcomeComponent,
    CategoriesComponent,
    StarComponent,
    BadgeComponent,
    CardSimpleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RecipeFacade,
    RecipeAPI
  ]
})
export class RecipeModule { }
