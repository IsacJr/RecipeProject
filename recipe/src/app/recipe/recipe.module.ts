import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './containers/home';
import { DetailComponent } from './containers/detail';
import { NewComponent } from './containers/new';
import { CardComponent } from './components/home/card/card.component';
import { SectionComponent } from './components/home/section/section.component';
import { RecipeFacade } from './recipe.facade';
import { RecipeAPI } from './api/recipe.api';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { BadgeComponent } from './components/home/badge/badge.component';
import { CardSimpleComponent } from './components/home/card-simple/card-simple.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './containers/contact/contact.component';
import { SpotlightComponent } from './components/home/spotlight/spotlight.component';
import { HeadComponent } from './components/detail/head/head.component';
import { StepByStepComponent } from './components/detail/step-by-step/step-by-step.component';
import { IngredientsComponent } from './components/detail/ingredients/ingredients.component';
import { SharedModule } from '../shared';
import { ListComponent } from './components/list/list/list.component';
import { RecipesComponent } from './containers/recipes/recipes.component';

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
