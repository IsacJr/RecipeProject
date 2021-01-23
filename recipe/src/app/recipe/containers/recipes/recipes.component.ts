import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipeList: RecipeModel[];

  constructor(
    private recipeFacade: RecipeFacade,
    private router: Router) { 
    this.getAllRecipes();
  }

  ngOnInit(): void {
  }

  getAllRecipes(){
    this.recipeFacade.getAllRecipe().subscribe(
      response => this.recipeList = response,
      error => console.log(error)
    )
  }

  handleClickSpotlight(event:any){
    console.log(`got to router: /recipes/detail/${event}`);
    this.router.navigate(['/recipes/detail', event])
  }

}
