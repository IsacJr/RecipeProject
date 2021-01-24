import { Component, OnInit } from '@angular/core';

import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { CategoryModel } from '../../models/CategoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipeList: RecipeModel[];
  categoryList: CategoryModel[];

  constructor(
    private recipeFacade: RecipeFacade,
    private router: Router
  ) 
  {
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

  handleClickSpotlight(event:any){
    this.router.navigate(['/recipes/detail', event])
  }

  handleCategoryCardClicked(event){
    console.log(`event in home: ${event}`);
    this.router.navigate(['/recipes/list'], { state: {data: event} });
  }

}
