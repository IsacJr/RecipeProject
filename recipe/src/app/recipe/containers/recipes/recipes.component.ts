import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/CategoryModel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  
  recipeList: RecipeModel[];
  categoryList: CategoryModel[];
  selectedCategoryId?: number;

  constructor(
    private recipeFacade: RecipeFacade,
    private router: Router) { 
    this.getAllRecipes();
    this.getAllCategories();
  }

  ngOnInit(): void {
    this.setSelectedCategory();
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

  setSelectedCategory(){
    if(history.state.data){
      
    }
  }

  handleClickSpotlight(event:any){
    console.log(`got to router: /recipes/detail/${event}`);
    this.router.navigate(['/recipes/detail', event])
  }

}
