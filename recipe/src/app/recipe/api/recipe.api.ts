import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { MockedRecipe } from '../mock/MockedRecipe';
import { RecipeModel } from '../models/RecipeModel';
import { CategoryModel } from '../models/CategoryModel';
import { MockedCategory } from '../mock/MockedCategory';

@Injectable({
    providedIn: 'root'
})
export class RecipeAPI {

    getAllRecipes(): Observable<RecipeModel[]>{
        return new Observable(observable => {
            observable.next(MockedRecipe);
            observable.complete();
        });
    }

    getRecipeById(id: number): Observable<RecipeModel>{
        const recipe = MockedRecipe.find(r => r.id === id);
        return new Observable(observable => {
            observable.next(recipe);
            observable.complete();
        });
    }

    getAllCategories(): Observable<CategoryModel[]>{
        return new Observable(observable => {
            observable.next(MockedCategory);
            observable.complete();
        });
    }
}
