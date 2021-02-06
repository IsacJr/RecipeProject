import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/CategoryModel';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  
  recipeList: RecipeModel[];
  categoryList: CategoryModel[];
  selectedCategoryId?: number;
  myForm: FormGroup;

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

  public get categoryForm(){
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
    this.recipeFacade.getAllRecipe().subscribe(
      response => this.recipeList = response,
      error => console.log(error)
    )
  }

  private getAllRecipesByCategory(id: number){
    this.recipeFacade.getRecipeByCategory(id).subscribe(
      response => this.recipeList = response,
      error => console.log(error)
    )
  }

  private getAllCategories(){
    this.recipeFacade.getAllCategory().subscribe(
      response => this.categoryList = response,
      error => console.log(error)
    )
  }

  handleClickSpotlight(event:any){
    this.router.navigate(['/recipes/detail', event])
  }

  handleSubmit(e){
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

}
