import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipeList: RecipeModel[];

  constructor(private recipeFacade: RecipeFacade) {
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

}
