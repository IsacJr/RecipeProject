import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { 
  HomeComponent,
  ContactComponent,
  DetailComponent,
  NewComponent,
  RecipesComponent} from './containers';  
import { CardComponent } from './components/home/card/card.component';
import { CardSimpleComponent } from './components/home/card-simple/card-simple.component';
import {
  SectionComponent,
  BadgeComponent,
  CategoriesComponent,
  SpotlightComponent,
  WelcomeComponent } from './components/home';
import { RecipeFacade } from './recipe.facade';
import { RecipeAPI } from './api/recipe.api';
import { HeadComponent } from './components/detail/head/head.component';
import { StepByStepComponent } from './components/detail/step-by-step/step-by-step.component';
import { IngredientsComponent } from './components/detail/ingredients/ingredients.component';
import { SharedModule } from '../shared';
import { ListComponent } from './components/list/list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    NewComponent,
    CardComponent,
    SectionComponent,
    WelcomeComponent,
    CategoriesComponent,
    BadgeComponent,
    CardSimpleComponent,
    ContactComponent,
    SpotlightComponent,
    HeadComponent,
    StepByStepComponent,
    IngredientsComponent,
    ListComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [
    RecipeFacade,
    RecipeAPI
  ]
})
export class RecipeModule { }
