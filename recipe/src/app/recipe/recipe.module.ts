import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { 
  HomeComponent,
  ContactComponent,
  DetailComponent,
  NewComponent,
  RecipesComponent} from './containers';  
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactSectionComponent } from './components/contact/contact-section/contact-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    NewComponent,
    SectionComponent,
    WelcomeComponent,
    CategoriesComponent,
    BadgeComponent,
    ContactComponent,
    SpotlightComponent,
    HeadComponent,
    StepByStepComponent,
    IngredientsComponent,
    ListComponent,
    RecipesComponent,
    ContactFormComponent,
    ContactSectionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    RecipeFacade,
    RecipeAPI
  ]
})
export class RecipeModule { }
