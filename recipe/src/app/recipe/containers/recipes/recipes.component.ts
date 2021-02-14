import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/CategoryModel';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { unsubscribeObservables } from 'src/app/shared/utils/observable-utils';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {

  recipeList: RecipeModel[];
  categoryList: CategoryModel[];
  selectedCategoryId?: number;
  myForm: FormGroup;
  subscriptionList: Subscription[] = [];

  constructor(
    private recipeFacade: RecipeFacade,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        categoryForm: [null, [Validators.required]]
      });
      this.getAllCategories();
      this.tryInitializeRecipes();
  }

  ngOnInit(): void {  }

  public get categoryForm() {
    return this.myForm.get('categoryForm');
  }

  private tryInitializeRecipes(){
    if(history.state.data){
      const categorySelected = this.categoryList.find(c => c.id === history.state.data);
      this.myForm.controls['categoryForm'].setValue(categorySelected, { onlySelf: true });
      this.getAllRecipesByCategory(history.state.data);
    }else{
      this.getAllRecipes();
    }
  }

  private getAllRecipes(){
    this.subscriptionList.push(
      this.recipeFacade.getAllRecipe()
      .pipe(take(1))
      .subscribe(
        response => this.recipeList = response,
        error => console.log(error)
      )
    );
  }

  private getAllRecipesByCategory(id: number){
    this.subscriptionList.push(
      this.recipeFacade.getRecipeByCategory(id)
      .pipe(take(1))
      .subscribe(
        response => this.recipeList = response,
        error => console.log(error)
      )
    );
  }

  private getAllCategories(){
    this.subscriptionList.push(
      this.recipeFacade.getAllCategory()
      .pipe(take(1))
      .subscribe(
        response => this.categoryList = response,
        error => console.log(error)
      )
    );
  }

  handleClickSpotlight(event: any){
    this.router.navigate(['/recipes/detail', event])
  }

  handleSubmit(e: any){
    e.preventDefault();
    if(this.myForm.value.categoryForm)
      this.getAllRecipesByCategory(this.myForm.value.categoryForm.id);
    else
      this.getAllRecipes();
  }

  handleClean(){
    this.myForm.controls['categoryForm'].reset();
    this.getAllRecipes();
  }

  handleSelectChange(e){
    console.log(e.target.value);
    // this.myForm.controls['categoryForm'].setValue(e.target.value), { onlySelf: true });
  }

  ngOnDestroy(): void {
    unsubscribeObservables(this.subscriptionList);
  }

}
