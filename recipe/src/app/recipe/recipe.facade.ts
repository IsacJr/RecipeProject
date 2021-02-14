import { RecipeAPI } from './api/recipe.api';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { RecipeModel } from './models/RecipeModel';
import { Injectable } from '@angular/core';
import { CategoryModel } from './models/CategoryModel';

@Injectable({
    providedIn: 'root'
})
export class RecipeFacade {

    constructor(private recipeApi: RecipeAPI) { }

    getAllRecipe(): Observable<RecipeModel[]>{
        return this.recipeApi.getAllRecipes();
    }

    getRecipeById(id:number): Observable<RecipeModel>{
        return this.recipeApi.getRecipeById(id);
    }

    getRecipeByCategory(id:number): Observable<RecipeModel[]>{
        return this.recipeApi.getAllRecipes().pipe(
            map( recipes =>  recipes.filter(rec => rec.category === id),
            tap(console.log))
        );
    }

    getAllCategory(): Observable<CategoryModel[]>{
        return this.recipeApi.getAllCategories();
    }
}