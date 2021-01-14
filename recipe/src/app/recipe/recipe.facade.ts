import { RecipeAPI } from './api/recipe.api';
import { Observable } from 'rxjs/Observable';
import { RecipeModel } from './models/RecipeModel';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeFacade {

    constructor(private recipeApi: RecipeAPI) { }

    getAllRecipe(): Observable<RecipeModel[]>{
        return this.recipeApi.getAllRecipes();
    }
}