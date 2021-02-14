import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { CategoryModel } from '../../models/CategoryModel';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators';
import { Subscription } from 'rxjs';
import { unsubscribeObservables } from 'src/app/shared/utils/observable-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  recipeList: RecipeModel[];
  categoryList: CategoryModel[];
  private subscriptionList: Subscription[] = [];

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

  getAllRecipes(): void {
    this.subscriptionList.push(
      this.recipeFacade.getAllRecipe()
      .pipe(take(1))
      .subscribe(
        response => this.recipeList = response,
        error => console.log(error)
      )
    );
  }

  getAllCategories(): void {
    this.subscriptionList.push(
      this.recipeFacade.getAllCategory()
      .pipe(take(1))
      .subscribe(
        response => this.categoryList = response,
        error => console.log(error)
      )
    );
  }

  handleClickSpotlight(event:any): void {
    this.router.navigate(['/recipes/detail', event]);
  }

  handleCategoryCardClicked(event): void {
    this.router.navigate(['/recipes/list'], { state: {data: event} });
  }

  ngOnDestroy(): void {
    unsubscribeObservables(this.subscriptionList);
  }

}
