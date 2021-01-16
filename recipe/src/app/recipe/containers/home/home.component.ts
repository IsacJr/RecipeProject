import { Component, OnInit } from '@angular/core';

import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { CategoryModel } from '../../models/CategoryModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipeList: RecipeModel[];
  categoryList: CategoryModel[];

  constructor(private recipeFacade: RecipeFacade) {
    this.getAllRecipes();
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  getAllRecipes(){
    this.recipeFacade.getAllRecipe().subscribe(
      response => this.recipeList = response,
      error => console.log(error)
    )
  }

  getAllCategories(){
    this.recipeFacade.getAllCategory().subscribe(
      response => this.categoryList = response,
      error => console.log(error)
    )
  }

}
