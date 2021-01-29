import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/CategoryModel';
import { FormBuilder, Validators } from '@angular/forms';

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
    private router: Router,
    private formBuilder: FormBuilder) { 
    this.getAllRecipes();
    this.getAllCategories();
  }

  myForm = this.formBuilder.group({
    categoryForm: [null, [Validators.required]]
  })

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

  get categoryForm(){
    return this.myForm.get('categoryForm');
  }

  handleSelect(event: any){
    //this.categoryForm.setValue(event.target.value, { onlySelf: true })
    console.log(event);
  }

}
