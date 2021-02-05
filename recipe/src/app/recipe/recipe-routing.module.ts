import { Routes } from '@angular/router';

import { 
    HomeComponent,
    DetailComponent,
    NewComponent
} from './containers'
import { ContactComponent } from './containers/contact/contact.component';
import { Component } from '@angular/core';
import { RecipesComponent } from './containers/recipes/recipes.component';

export const RecipeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'recipes/home',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        redirectTo: 'recipes/home',
    },
    {
        path: 'recipes/home',
        component: HomeComponent
    },
    {
        path: 'recipes/detail/:id',
        component: DetailComponent
    },
    {
        path: 'recipes/list',
        component: RecipesComponent
    },
    {
        path: 'recipes/new',
        component: NewComponent
    },
    {
        path: 'recipes/contact',
        component: ContactComponent
    }
]
